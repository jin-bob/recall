import { createColumnHelper } from '@tanstack/react-table';
import TruncateCell from '@/components/tables/cells/truncate-cell.tsx';
import { getConvertedDate } from '@/helpers/getConvertedDate.tsx';
import StatusCell from '@/pages/dashboard/table/cells/status-cell.tsx';
import type { TableDataResponseObject } from '@/types/table-data-response-object.ts';

const tableColumnHelper = createColumnHelper<TableDataResponseObject>();

export const tableColumns = [
  tableColumnHelper.accessor('name', {
    size: 165,
    header: 'Name',
    cell: TruncateCell,
  }),
  tableColumnHelper.accessor('description', {
    size: 365,
    header: 'Description',
    cell: TruncateCell,
  }),
  tableColumnHelper.accessor('startDate', {
    size: 120,
    header: 'Start Date',
    cell: ({ getValue }) => {
      const value = getValue();

      return <div>{getConvertedDate(value)}</div>;
    },
  }),
  tableColumnHelper.accessor('endDate', {
    size: 120,
    header: 'End Date',
    cell: ({ getValue }) => {
      const value = getValue();

      return <div>{getConvertedDate(value)}</div>;
    },
  }),
  tableColumnHelper.accessor('type', {
    size: 165,
    header: 'Type',
    cell: TruncateCell,
  }),

  tableColumnHelper.accessor('categories', {
    size: 165,
    header: 'Categories',
    cell: ({ getValue }) => {
      const categories = getValue();

      if (!categories?.length) {
        return null;
      }

      return (
        <ul className="max-h-[20px] overflow-y-auto">
          {categories.map((category) => (
            <li key={category.id} className="max-w-[150px] truncate">
              {category.name}
            </li>
          ))}
        </ul>
      );
    },
  }),

  tableColumnHelper.accessor('status', {
    size: 160,
    header: 'Status',
    cell: StatusCell,
  }),
];
