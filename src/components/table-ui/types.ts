import type { ReactNode } from 'react';
import type { RowData, Table, TableOptions } from '@tanstack/react-table';

export type TableUIProps<TData extends RowData> = Omit<
  TableOptions<TData>,
  'getCoreRowModel'
> & {
  isLoading: boolean;
  error?: ReactNode;
  className?: string;
};

export type TableContentProps<TData> = {
  table: Table<TData>;
  error?: ReactNode;
  className?: string;
};
