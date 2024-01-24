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
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { TfiSearch } from "react-icons/tfi";

import { FaFilter, FaSearch } from "react-icons/fa";
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

const Table = ({ columns, data, hasFilter = false }) => {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState([]);

  const [showFilter, setShowFilter] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

  const table = useReactTable({
    data,
    columns,

    state: {
      columnFilters,
      globalFilter,
    },

    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
  });

  const handleFilter = () => setShowFilter(!showFilter);
  const handleSearch = () => setShowSearch(!showSearch);

  return (
    <>
      {hasFilter && (
        <div className="py-2 flex justify-between mr-2">
          {showSearch ? (
            <DebouncedInputSearch
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="text-sm shadow-sm border border-block"
              placeholder="Type your keyword"
            />
          ) : (
            <span className="h-[34.75px]"></span>
          )}
          <ul className="flex gap-2 items-center mb-2 ">
            <li>
              <button
                className="tooltip tooltip--bottom"
                data-tooltip="Search"
                onClick={handleSearch}
              >
                <TfiSearch />
              </button>
            </li>
            <li>
              <button
                className="tooltip tooltip--bottom"
                data-tooltip="Filter"
                onClick={handleFilter}
              >
                <FaFilter />
              </button>
            </li>
          </ul>
        </div>
      )}
      <div className="my-2 px-2 bg-white rounded-md ">
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
                            {header.column.getCanFilter() &&
                            header.column.id !== "action"
                              ? showFilter && (
                                  <Filter
                                    column={header.column}
                                    table={table}
                                  />
                                )
                              : null}

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
