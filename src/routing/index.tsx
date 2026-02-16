import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import ROUTE_PATHS from '@/constants/route-paths.ts';
import AUTH_ROUTE_OBJECT from '@/routing/auth-route-object.tsx';
import ADMIN_ROUTE_OBJECT from '@/routing/admin-route-object.tsx';

const WelcomePage = lazy(() => import('@/pages/welcome'));

const ROUTES = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Skeleton className="h-full w-full" />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: ROUTE_PATHS.root,
        element: (
          <Suspense
            key={ROUTE_PATHS.root}
            fallback={<Skeleton className="h-full w-full" />}
          >
            <WelcomePage />
          </Suspense>
        ),
      },
    ],
  },
  AUTH_ROUTE_OBJECT,
  ADMIN_ROUTE_OBJECT,
]);

export default ROUTES;
