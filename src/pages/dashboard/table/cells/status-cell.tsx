import type { ReactNode } from 'react';
import { Loader, ThumbsUp } from 'lucide-react';
import type { CellContext, RowData } from '@tanstack/react-table';
import { cn } from '@/lib/utils.ts';

const STATUS_DICTIONARY: Record<
  string,
  {
    icon: ReactNode;
    label: string;
    className: string;
  }
> = {
  inProgress: {
    icon: <Loader className="h-[14px] w-[14px]" />,
    label: 'In  Progress',
    className: 'bg-blue-200 text-blue-600',
  },
  approved: {
    icon: <ThumbsUp className="h-[14px] w-[14px]" />,
    label: 'Approved',
    className: 'bg-green-200 text-green-600',
  },
};

export default function StatusCell<
  TData extends RowData,
  TValue extends string,
>({ getValue }: CellContext<TData, TValue>) {
  const status = getValue();

  const statusData = STATUS_DICTIONARY[status] || null;

  return (
    <div>
      <div
        className={cn('flex items-center rounded-xl', statusData?.className)}
      >
        <div className="p-3">{statusData?.icon}</div>

        <div>{statusData?.label}</div>
      </div>
    </div>
  );
}
