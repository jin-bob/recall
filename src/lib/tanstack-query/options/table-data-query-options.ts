import { queryOptions } from '@tanstack/react-query';
/*import { INITIAL_LIMIT, INITIAL_PAGE } from '@/constants/common.ts';
import axiosInstance from '@/lib/axios';
import type { PaginatedResponse } from '@/types/paginated-response.ts';*/
import { TableDataResponseObject } from '@/types/table-data-response-object.ts';

export type TableDataQueryParams = Record<
  'page' | 'perPage' | 'search' | 'sortBy' | 'sortDir',
  Nullable<string>
>;

export type MockResponse<T> = {
  data: T[];
  page: number;
  perPage: number;
  total: number;
};

export const createTableDataQueryKey = () => ['table-data'] as const;

export const createTableDataQueryKeyWithParams = (
  params: TableDataQueryParams
) => [...createTableDataQueryKey(), { ...params }] as const;

function generateMock(id: number): TableDataResponseObject {
  return {
    id,
    name: `Project ${id}`,
    status: id % 2 === 0 ? 'inProgress' : 'approved',
    description: `Description for project ${id}`,
    budget: Math.floor(Math.random() * 10000),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    type: id % 2 === 0 ? 'internal' : 'external',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    images: [{ id: 1, src: `https://picsum.photos/200?random=${id}` }],
    categories: [
      { id: 1, name: 'Marketing' },
      { id: 2, name: 'Development' },
    ],
  };
}

export default function createTableDataQueryOptions(
  params: TableDataQueryParams
) {
  return queryOptions({
    queryKey: createTableDataQueryKeyWithParams(params),
    queryFn: async ({ queryKey: [path, params], signal }) => {
      /* const { data } = await axiosInstance.get<
         PaginatedResponse<TableDataResponseObject>
       >(path, {
         params: {
           ...params,
           page: params.page ?? INITIAL_PAGE,
           perPage: params.perPage ?? INITIAL_LIMIT,
         },
         signal,
       });

       return data;*/

      console.log(path, path, params, signal);

      const page = Number(params.page ?? 1);
      const perPage = Number(params.perPage ?? 10);

      const total = 47;
      const start = (page - 1) * perPage + 1;
      const end = Math.min(start + perPage - 1, total);

      const mockData: TableDataResponseObject[] = [];

      for (let i = start; i <= end; i++) {
        mockData.push(generateMock(i));
      }

      return new Promise<MockResponse<TableDataResponseObject>>((resolve) =>
        setTimeout(
          () =>
            resolve({
              data: mockData,
              page,
              perPage,
              total,
            }),
          1000
        )
      );
    },
  });
}
