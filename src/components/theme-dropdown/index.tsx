import {
  DropdownMenu,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu.tsx';
import ThemeDropdownMenu from '@/components/theme-dropdown/theme-dropdown-menu.tsx';
import DropdownMenuTriggerWithState from '@/components/theme-dropdown/dropdown-menu-trigger-with-state.tsx';

export default function ThemeDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTriggerWithState />
      <DropdownMenuContent className="bg-background">
        <ThemeDropdownMenu />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
