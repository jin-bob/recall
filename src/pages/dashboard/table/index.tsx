import { useQuery } from '@tanstack/react-query';
import TableUI from '@/components/table-ui';
import TablePagination from '@/components/table-pagination.tsx';
import useGetCommonSearchParams from '@/hooks/use-get-common-search-params.ts';
import { tableColumns } from '@/pages/dashboard/table/table-columns.tsx';
import createTableDataQueryOptions from '@/lib/tanstack-query/options/table-data-query-options.ts';

export default function Table() {
  const { page, perPage, search, sortBy, sortDir } = useGetCommonSearchParams();

  const {
    isLoading,
    error,
    data: responseData,
  } = useQuery(
    createTableDataQueryOptions({
      page,
      perPage,
      search,
      sortBy,
      sortDir,
    })
  );

  return (
    <div className="w-full flex-1 overflow-y-auto rounded-md border px-5">
      <TableUI
        className="h-[79px]"
        isLoading={isLoading}
        data={responseData?.data ?? []}
        error={error?.message}
        columns={tableColumns}
        state={{
          columnPinning: {
            right: ['actions'],
          },
        }}
      />

      <TablePagination total={responseData?.total ?? 0} />
    </div>
  );
}
