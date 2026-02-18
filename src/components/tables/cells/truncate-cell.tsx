import type { ReactNode } from 'react';
import type { CellContext, RowData } from '@tanstack/react-table';

export default function TruncateCell<
  TData extends RowData,
  TValue extends ReactNode,
>({ getValue }: CellContext<TData, TValue>) {
  return <div className="truncate">{getValue()}</div>;
}
