import React from "react";
import { FaSearch } from "react-icons/fa";

export const IndeterminateCheckbox = ({
  indeterminate,
  className = "",
  ...rest
}) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
};

export const Filter = ({ column, table }) => {
  const columnFilterValue = column.getFilterValue();

  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  return (
    <>
      {/* <datalist id={column.id + "list"}>
        {sortedUniqueValues.slice(0, 5000).map((value) => (
          <option value={value} key={value} />
        ))}
      </datalist> */}
      <DebouncedColumnFilter
        type="text"
        value={columnFilterValue ?? ""}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search...`}
        className="w-36 border  rounded placeholder:text-gray-400 placeholder:font-normal"
        list={column.id + "list"}
      />
      <div className="h-1" />
    </>
  );
};

export const DebouncedInputSearch = ({
  value: initialValue,
  onChange,
  debounce = 1000,
  ...props
}) => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="relative w-full">
      <input
        {...props}
        value={value}
        type="search"
        onChange={(e) => setValue(e.target.value)}
        className="pl-7 w-full max-w-[380px] text-xs placeholder:opacity-50"
      />
      <FaSearch className="absolute text-xs top-2 left-2 opacity-25" />
    </div>
  );
};

export const DebouncedColumnFilter = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
