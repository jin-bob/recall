import {
  flexRender,
  getCoreRowModel,
  type RowData,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx';
import { useMemo } from 'react';
import createLoading from './create-loading.tsx';
import getCommonPinningStyle from './get-common-pinning-style.ts';
import TableContent from './table-content.tsx';
import type { TableUIProps } from './types.ts';

export default function TableUI<TData extends RowData>({
  isLoading,
  data,
  columns,
  className,
  error,
  ...props
}: TableUIProps<TData>) {
  const { columns: tableColumns, data: tableData } = createLoading({
    isLoading,
    columns,
    data,
  });

  const memoData = useMemo(() => tableData, [tableData]);
  const memoColumns = useMemo(() => tableColumns, [tableColumns]);

  const table = useReactTable({
    data: memoData,
    columns: memoColumns,
    getCoreRowModel: getCoreRowModel(),
    ...props,
  });
  const width = table.getTotalSize();

  return (
    <Table className="table-fixed" style={{ width }}>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const isPinned = header.column.getIsPinned();

              return (
                <TableHead
                  key={header.id}
                  className="text-foreground h-12 text-center text-[12px]"
                  style={getCommonPinningStyle(header.column)}
                >
                  {isPinned && (
                    <div className="bg-background absolute inset-0 -z-[1]" />
                  )}
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        <TableContent table={table} error={error} className={className} />
      </TableBody>
    </Table>
  );
}
