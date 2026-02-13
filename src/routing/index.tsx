import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router';
import ROUTE_PATHS from '@/constants/route-paths.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';

const WelcomePage = lazy(() => import('@/pages/welcome'));

const ROUTES = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Skeleton />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: ROUTE_PATHS.welcome,
        element: (
          <Suspense
            key={ROUTE_PATHS.welcome}
            fallback={<Skeleton className="h-full w-full" />}
          >
            <WelcomePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<Skeleton className="h-full w-full" />}>
        <Outlet />
      </Suspense>
    ),
    handle: { title: () => 'Dashboard' },
    children: [
      {
        index: true,
        element: (
          <Suspense
            key={ROUTE_PATHS.root}
            fallback={<Skeleton className="h-full w-full" />}
          >
            <div>Dashboard</div>
          </Suspense>
        ),
      },
    ],
  },
]);

export default ROUTES;
