import type { RowData, TableOptions } from '@tanstack/react-table';
import range from 'lodash-es/range';
import { Skeleton } from '@/components/ui/skeleton.tsx';

type CreateLoadingOptions<TData extends RowData> = {
  isLoading: boolean;
  data: TableOptions<TData>['data'];
  columns: TableOptions<TData>['columns'];
};

export default function createLoading<TData extends RowData>({
  isLoading,
  data,
  columns,
}: CreateLoadingOptions<TData>): Pick<
  CreateLoadingOptions<TData>,
  'columns' | 'data'
> {
  if (isLoading) {
    return {
      data: range(10).map((id) => ({ id }) as TData),
      columns: columns.map((column) => ({
        ...column,
        cell: () => <Skeleton className="h-8 w-full" />,
      })),
    };
  }

  return {
    data,
    columns,
  };
}
