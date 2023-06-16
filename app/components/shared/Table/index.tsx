import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

function Table(props: {
    data: any
    columns: any
    loading: boolean
    className?: any
}) {
    const { data, columns, loading, className = '' } = props
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        autoResetAll: true,
    })

    let tableRow: React.ReactNode | undefined

    if (!data) return <div>Loading</div>

    if (!data.length)
        tableRow = (
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>No data available!</td>
            </tr>
        )

    return (
        <>
            <table className={className}>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {!tableRow
                        ? table?.getRowModel()?.rows.map((row) => (
                              <tr key={row.id}>
                                  {row.getVisibleCells().map((cell) => {
                                      return (
                                          <td key={cell.id}>
                                              {flexRender(
                                                  cell.column.columnDef.cell,
                                                  cell.getContext()
                                              )}
                                          </td>
                                      )
                                  })}
                              </tr>
                          ))
                        : tableRow}
                </tbody>
                <tfoot>
                    {table.getFooterGroups()?.map((footerGroup) => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.footer,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </>
    )
}

export default Table
