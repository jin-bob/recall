import { Link } from 'react-router';
import { Settings } from 'lucide-react';
import ROUTE_PATHS from '@/constants/route-paths.ts';
import { buttonVariants } from '@/components/ui/button.tsx';
import { cn } from '@/lib/utils.ts';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 mx-auto flex w-full items-center justify-between bg-blue-300 px-3 py-2 md:px-5 md:py-4">
      <Link to={ROUTE_PATHS.welcome}>Logo</Link>

      <div className="flex items-center gap-4">
        <Link
          to={ROUTE_PATHS.root}
          className={cn(
            buttonVariants({ variant: 'secondary' }),
            'h-[30px] w-[40px] rounded-full md:h-auto md:w-auto'
          )}
        >
          <Settings />

          <span className="hidden md:block">Dashboard</span>
        </Link>

        <div>Profile</div>
      </div>
    </header>
  );
}
