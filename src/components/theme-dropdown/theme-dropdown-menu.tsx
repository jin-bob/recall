import { Moon, SunMoon } from 'lucide-react';
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu.tsx';
import useTheme from '@/context/theme/use-theme.ts';
import THEME from '@/constants/theme.ts';

export default function ThemeDropdownMenu() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
      <DropdownMenuRadioItem
        value={THEME.system}
        className="justify-between gap-2"
      >
        System <SunMoon className="size-4" />
      </DropdownMenuRadioItem>

      <DropdownMenuRadioItem
        value={THEME.light}
        className="justify-between gap-2"
      >
        Light <SunMoon className="size-4" />
      </DropdownMenuRadioItem>

      <DropdownMenuRadioItem
        value={THEME.dark}
        className="justify-between gap-2"
      >
        Dark <Moon className="size-4" />
      </DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  );
}
