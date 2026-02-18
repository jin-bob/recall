import { useSearchParams } from 'react-router';
import { URL_KEYS } from '@/constants/common.ts';

export default function useGetCommonSearchParams() {
  const [searchParams] = useSearchParams();

  const page = searchParams.get(URL_KEYS.page);
  const perPage = searchParams.get(URL_KEYS.perPage);
  const search = searchParams.get(URL_KEYS.search);
  const sortBy = searchParams.get(URL_KEYS.sortBy);
  const sortDir = searchParams.get(URL_KEYS.sortDir);

  return {
    page,
    perPage,
    search,
    sortBy,
    sortDir,
  };
}
