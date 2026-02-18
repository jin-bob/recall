import { useSearchParams } from 'react-router';
import { Button, type ButtonProps } from '@/components/ui/button.tsx';
import { INITIAL_LIMIT, INITIAL_PAGE, URL_KEYS } from '@/constants/common.ts';

type TablePaginationProps = {
  total: number;
};

export default function TablePagination({ total }: TablePaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get(URL_KEYS.page) ?? INITIAL_PAGE;
  const perPage = searchParams.get(URL_KEYS.perPage) ?? INITIAL_LIMIT;
  const lastPage = Math.ceil(total / Number(perPage));

  const setPage: ButtonProps['onClick'] = ({ currentTarget }) => {
    const value = Number.parseInt(currentTarget.value, 10);
    const curSearchParams = new URLSearchParams(searchParams);
    curSearchParams.delete(URL_KEYS.page);

    if (value > 0) {
      curSearchParams.set(URL_KEYS.page, value.toString());
    }

    setSearchParams(curSearchParams, { preventScrollReset: true });
  };

  return (
    <div className="my-4 flex justify-center gap-x-2">
      <Button
        variant="outline"
        size="sm"
        value={Number(page) - 1}
        onClick={setPage}
        disabled={page == 0}
      >
        Previous
      </Button>

      <Button
        variant="outline"
        size="sm"
        value={Number(page) + 1}
        onClick={setPage}
        disabled={Number(page) + 1 === lastPage}
      >
        Next
      </Button>
    </div>
  );
}
