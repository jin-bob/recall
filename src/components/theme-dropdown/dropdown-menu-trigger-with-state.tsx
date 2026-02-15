import { Moon, SunMoon } from 'lucide-react';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu.tsx';
import useTheme from '@/context/theme/use-theme.ts';
import THEME from '@/constants/theme.ts';

export default function DropdownMenuTriggerWithState() {
  const { theme } = useTheme();

  return (
    <DropdownMenuTrigger>
      {theme === THEME.dark ? (
        <Moon className="size-5" />
      ) : (
        <SunMoon className="size-5" />
      )}
    </DropdownMenuTrigger>
  );
}
