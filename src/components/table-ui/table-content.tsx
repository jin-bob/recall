import { flexRender } from '@tanstack/react-table';
import { TableCell, TableRow } from '@/components/ui/table.tsx';
import AlertDestructive from '@/components/alert-destructive.tsx';
import AlertNoData from '@/components/alert-no-data.tsx';
import getCommonPinningStyle from './get-common-pinning-style.ts';
import type { TableContentProps } from './types.ts';

export default function TableContent<T>({
  table,
  error,
  className,
}: TableContentProps<T>) {
  const colSpan = table.getVisibleFlatColumns().length;

  if (error) {
    return (
      <TableRow>
        <TableCell colSpan={colSpan}>
          <div className="sticky left-2 w-fit">
            <AlertDestructive description={error} />
          </div>
        </TableCell>
      </TableRow>
    );
  }

  const rows = table.getRowModel().rows;

  if (!rows?.length) {
    return (
      <TableRow>
        <TableCell colSpan={colSpan}>
          <div className="sticky left-2 w-fit">
            <AlertNoData title="No Table data" description="" />
          </div>
        </TableCell>
      </TableRow>
    );
  }

  return rows.map((row) => {
    return (
      <TableRow
        key={row.id}
        data-state={row.getIsSelected() && 'selected'}
        className={className}
      >
        {row.getVisibleCells().map((cell) => {
          const isPinned = cell.column.getIsPinned();

          return (
            <TableCell
              key={cell.id}
              style={getCommonPinningStyle(cell.column)}
              className="text-center"
            >
              {isPinned && (
                <div className="bg-background absolute inset-0 -z-[1]" />
              )}
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          );
        })}
      </TableRow>
    );
  });
}
