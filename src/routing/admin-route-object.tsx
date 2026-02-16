import { lazy, Suspense } from 'react';
import { Outlet, type RouteObject } from 'react-router';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import ROUTE_PATHS from '@/constants/route-paths.ts';
import PrivateRoute from '@/routing/private-route.tsx';

const AdminLayout = lazy(() => import('@/layouts/admin'));

const ADMIN_ROUTE_OBJECT: RouteObject = {
  path: ROUTE_PATHS.admin,
  element: (
    <PrivateRoute>
      <AdminLayout>
        <Suspense fallback={<Skeleton className="h-full w-full" />}>
          <Outlet />
        </Suspense>
      </AdminLayout>
    </PrivateRoute>
  ),
  handle: { title: () => 'Dashboard' },
  children: [
    {
      index: true,
      element: (
        <Suspense
          key={ROUTE_PATHS.admin}
          fallback={<Skeleton className="h-full w-full" />}
        >
          <div>Dashboard</div>
        </Suspense>
      ),
    },
  ],
};

export default ADMIN_ROUTE_OBJECT;
