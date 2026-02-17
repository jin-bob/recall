import { Link } from 'react-router';
import { Settings } from 'lucide-react';
import Logo from '@/assets/icons/logo.svg?react';
import { buttonVariants } from '@/components/ui/button.tsx';
import ThemeDropdown from '@/components/theme-dropdown';
import ROUTE_PATHS from '@/constants/route-paths.ts';
import LoginButton from '@/components/login-button';
import { cn } from '@/lib/utils.ts';

export default function Header() {
  return (
    <header className="bg-header sticky top-0 z-10 mx-auto flex w-full items-center justify-between px-3 py-2 md:px-5 md:py-4">
      <Link to={ROUTE_PATHS.root}>
        <Logo className="h-[30px] w-[90px] dark:text-gray-400" />
      </Link>

      <div className="flex items-center gap-4">
        <Link
          to={ROUTE_PATHS.admin}
          className={cn(
            buttonVariants({ variant: 'secondary' }),
            'h-[30px] w-[40px] rounded-full text-white md:h-auto md:w-auto'
          )}
        >
          <Settings className="text-white" />

          <span className="hidden md:block">Dashboard</span>
        </Link>

        <div>
          <LoginButton />
        </div>

        <div className="flex items-center justify-center text-white">
          <ThemeDropdown />
        </div>
      </div>
    </header>
  );
}
