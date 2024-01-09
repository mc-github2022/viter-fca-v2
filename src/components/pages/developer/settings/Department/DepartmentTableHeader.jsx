const { createColumnHelper } = require("@tanstack/react-table");

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("", {
    header: "#",
    cell: (row) => {
      return row.row.index + 1;
    },
  }),

  columnHelper.accessor("role_name", {
    header: "Title",
  }),

  columnHelper.accessor("role_description", {
    header: "Description",
  }),
  columnHelper.accessor("role_is_active", {
    header: "Status",
    // cell: (row) => {
    //   if (row.row.original.role_is_active === 1) {
    //     return <Pills color="green" text="Active" />;
    //   } else {
    //     return <Pills color="red" text="Inactive" />;
    //   }
    // },
  }),
  columnHelper.accessor("action", {
    header: "Action",
    cell: (row) => (
      <>
        {row.row.original.role_is_active === 1 ? (
          <>
            <button
              type="button"
              className="tooltip"
              data-tooltip="Edit"
              onClick={() => handleEdit(row.row.original)}
            >
              <FaEdit />
            </button>
            <button
              type="button"
              className="tooltip"
              data-tooltip="Archive"
              onClick={() => handleArchive(row.row.original)}
            >
              <MdArchive />
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="tooltip"
              data-tooltip="Restore"
              onClick={() => handleRestore(row.row.original)}
            >
              <FaHistory />
            </button>
            <button
              type="button"
              className="tooltip"
              data-tooltip="Delete"
              onClick={() => handleDelete(row.row.original)}
            >
              <FaTrash />
            </button>
          </>
        )}
      </>
    ),
  }),
];
