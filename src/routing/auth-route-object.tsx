import { lazy, Suspense } from 'react';
import { Outlet, type RouteObject } from 'react-router';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import ROUTE_PATHS from '@/constants/route-paths.ts';
import PublicRoute from '@/routing/public-route.tsx';
import AuthLayout from '@/layouts/auth';

const SignInPage = lazy(() => import('@/pages/sign-in'));

const AUTH_ROUTE_OBJECT: RouteObject = {
  path: ROUTE_PATHS.auth,
  element: (
    <PublicRoute>
      <AuthLayout>
        <Suspense fallback={<Skeleton className="h-full w-full" />}>
          <Outlet />
        </Suspense>
      </AuthLayout>
    </PublicRoute>
  ),
  children: [
    {
      index: true,
      element: (
        <Suspense
          key={ROUTE_PATHS.auth}
          fallback={<Skeleton className="h-full w-full" />}
        >
          <SignInPage />
        </Suspense>
      ),
    },
    {
      path: ROUTE_PATHS.signUp,
      element: (
        <Suspense
          key={ROUTE_PATHS.signUp}
          fallback={<Skeleton className="h-full w-full" />}
        >
          <div>SignUpPage</div>
        </Suspense>
      ),
    },
  ],
};

export default AUTH_ROUTE_OBJECT;
