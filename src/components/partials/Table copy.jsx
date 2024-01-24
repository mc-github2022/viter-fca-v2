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

import {
  RxCaretLeft,
  RxCaretRight,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
} from "react-icons/rx";
import { DebouncedInput, Filter } from "../helpers/function-table.jsx";

const Table = ({ columns, data }) => {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState("");
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

  const Filter = ({ column, table }) => {
    const columnFilterValue = column.getFilterValue();
    return (
      <>
        <DebouncedInput
          type="text"
          value={columnFilterValue ?? ""}
          onChange={(value) => column.setFilterValue(value)}
          className="w-36 border shadow rounded"
          list={column.id + "list"}
        />
        <div className="h-1" />
      </>
    );
  };

  return (
    <>
      <div className="flex justify-between my-2 bg-white rounded-md shadow-sm">
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
                                ? "cursor-pointer select-none flex items-center mr-6"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: <BiCaretDown />,
                              desc: <BiCaretUp />,
                            }[header.column.getIsSorted()] ?? null}

                            <div>
                              {header.column.getCanFilter() ? (
                                <div>
                                  <Filter
                                    column={header.column}
                                    table={table}
                                  />
                                </div>
                              ) : null}
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
