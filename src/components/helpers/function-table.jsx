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

// A debounced input react component
export const DebouncedInput = ({
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
    <div className="relative w-full mb-2">
      <input
        {...props}
        value={value}
        type="search"
        onChange={(e) => setValue(e.target.value)}
        className="pl-8 w-full  placeholder:text-xs text-xs placeholder:opacity-40"
      />
      <FaSearch className="absolute top-2.5 left-2 opacity-25" />
    </div>
  );
};
