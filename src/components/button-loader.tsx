import { forwardRef, MouseEventHandler } from 'react';
import { LoaderCircle } from 'lucide-react';
import { Button, type ButtonProps } from '@/components/ui/button.tsx';
import { cn } from '@/lib/utils.ts';

export type ButtonLoader = Omit<ButtonProps, 'onClick'> & {
  isLoading: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ButtonLoader = forwardRef<HTMLButtonElement, ButtonLoader>(
  ({ children, className, isLoading, onClick, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        data-loading={isLoading}
        onClick={onClick}
        className={cn('group relative', className)}
        {...props}
      >
        <span className="group-data-[loading=true]:text-transparent">
          {children}
        </span>

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoaderCircle
              className="animate-spin"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>
        )}
      </Button>
    );
  }
);
ButtonLoader.displayName = 'ButtonLoader';

export default ButtonLoader;
