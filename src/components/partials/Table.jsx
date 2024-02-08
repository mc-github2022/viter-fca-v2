import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { CiFilter, CiViewTable } from "react-icons/ci";
import { TfiSearch } from "react-icons/tfi";

import {
  LiaSortDownSolid,
  LiaSortSolid,
  LiaSortUpSolid,
} from "react-icons/lia";
import {
  RxCaretLeft,
  RxCaretRight,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
} from "react-icons/rx";
import { DebouncedInputSearch, Filter } from "../helpers/function-table.jsx";

const Table = ({
  columnVisibility,
  setColumnVisibility,
  columns,
  data,
  hasFilter = false,
}) => {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState([]);

  const [showFilter, setShowFilter] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

  const [show, setShow] = React.useState(false);

  const dropDownRef = React.useRef();

  const table = useReactTable({
    data,
    columns,
    initialState: {
      columnVisibility: {},
      pagination: {
        pageSize: 20,
      },
    },
    state: {
      columnFilters,
      globalFilter,
      columnVisibility,
    },

    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
  });

  const handleFilter = () => setShowFilter(!showFilter);

  const allColumns = table.getAllLeafColumns().filter((item) => {
    return item.id !== "action" && item.id !== "#";
  });

  React.useEffect(() => {
    let handleShowDropdown = (e) => {
      if (!dropDownRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleShowDropdown);
    return () => {
      document.removeEventListener("mousedown", handleShowDropdown);
    };
  }, []);

  return (
    <>
      {hasFilter && (
        <div className="pt-5 pb-2 flex justify-between items-center mr-2">
          <DebouncedInputSearch
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="text-sm shadow-sm border border-block"
            placeholder="Type your keyword"
          />

          <ul className="flex gap-2 items-center mr-1 ">
            <li>
              <button
                className="tooltip  "
                data-tooltip="Filter"
                onClick={handleFilter}
              >
                <CiFilter className="text-lg" />
              </button>
            </li>
            <li>
              <div className="column__checkbox relative" ref={dropDownRef}>
                <button
                  className="tooltip  "
                  data-tooltip="Columns"
                  onClick={() => setShow(!show)}
                >
                  <CiViewTable className="text-lg" />
                </button>
                <div
                  className={`border border-line shadow-sm w-[140px] rounded absolute top-full right-3 z-20 bg-white ${
                    show ? "" : "hidden"
                  }`}
                >
                  <div className="pb-1 pt-1.5">
                    <p className="px-2 pb-2 mb-2 border-b border-line text-[12px] font-bold">
                      Show/Hide Columns
                    </p>
                    {allColumns.map((column) => {
                      return (
                        <div key={column.id} className="px-2 mb-4">
                          <label className="relative text-xs column__toggle">
                            <input
                              {...{
                                className: "cursor-pointer opacity-0 w-0 h-0",
                                type: "checkbox",
                                checked: column.getIsVisible(),
                                onChange: column.getToggleVisibilityHandler(),
                              }}
                            />
                            <div className="absolute w-[30px] cursor-pointer h-[19px] border bg-gray-300 top-0 right-0 rounded-2xl">
                              <div className="absolute w-[13px] h-[13px] top-[2px] left-[1px] bg-white rounded-full transition-all ease-linear "></div>
                            </div>
                            {column.columnDef.header}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}

      <div className="my-2 px-2 bg-primary rounded-md min-h-[100px]">
        <table className="table__sm">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none flex flex-col  mr-6"
                                : "",
                              onClick:
                                header.id !== "#" || header.id !== "action"
                                  ? header.column.getToggleSortingHandler()
                                  : null,
                            }}
                          >
                            <div
                              className={`${
                                header.id === "#" || header.id === "action"
                                  ? "noSort"
                                  : ""
                              } flex gap-1 items-center`}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {{
                                asc: <LiaSortDownSolid />,
                                desc: <LiaSortUpSolid />,
                              }[header.column.getIsSorted()] ?? (
                                <LiaSortSolid />
                              )}
                            </div>
                          </div>
                          {header.column.getCanFilter() &&
                          header.column.id !== "action"
                            ? showFilter && (
                                <Filter column={header.column} table={table} />
                              )
                            : null}
                        </>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}

      <div className="flex gap-3 justify-between items-center mt-4 px-2">
        <div className=" flex gap-2 items-baseline">
          <p className="text-xs">
            <span className="opacity-50">Total Record :</span>{" "}
            <span className="font-bold"> {data.length}</span>
          </p>
        </div>
        <div className="flex items-baseline justify-end gap-2">
          <div className="flex gap-1 ">
            <button
              className="border rounded p-1 w-[35px] h-[35px] flex justify-center items-center disabled:text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed "
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <RxDoubleArrowLeft />
            </button>
            <button
              className="border rounded p-1 w-[35px] h-[35px] flex justify-center items-center disabled:text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed "
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <RxCaretLeft />
            </button>
            <button
              className="border rounded p-1 w-[35px] h-[35px] flex justify-center items-center disabled:text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed "
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <RxCaretRight />
            </button>
            <button
              className="border rounded p-1 w-[35px] h-[35px] flex justify-center items-center disabled:text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed "
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <RxDoubleArrowRight />
            </button>
          </div>
        </div>
        <div className="flex gap-2 ">
          <span className="flex items-center gap-1">
            <div className="text-xs">
              <span className="opacity-50">Page</span>
            </div>
            <strong className="text-xs">
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
        </div>
      </div>
    </>
  );
};

export default Table;
