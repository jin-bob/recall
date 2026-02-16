import { NavLink } from 'react-router';
import { Linkedin } from 'lucide-react';
import ROUTE_PATHS from '@/constants/route-paths.ts';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-header mx-auto box-border flex h-[68px] w-full items-center justify-between gap-4 px-3 text-white md:px-5">
      <a
        href="https://www.linkedin.com/in/mdbobskiy/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Linkedin className="size-[24px]" />
      </a>

      <div className="flex gap-2">
        <span>{currentYear}</span>

        <NavLink to={ROUTE_PATHS.root}>Recall</NavLink>
      </div>
    </footer>
  );
}
