import { Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router';
import ROUTE_PATHS from '@/constants/route-paths.ts';
import { Button } from '@/components/ui/button.tsx';

const FallbackComponent = () => (
  <div className="bg-background h-full w-full text-center">Loading...</div>
);

const ROUTES = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<FallbackComponent />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: ROUTE_PATHS.welcome,
        element: (
          <Suspense key={ROUTE_PATHS.welcome} fallback={<FallbackComponent />}>
            <div className="flex flex-col items-center justify-between gap-4">
              <div>Welcome Pago</div>
              <div>
                <Button>Click me!</Button>
              </div>
            </div>
          </Suspense>
        ),
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<FallbackComponent />}>
        <Outlet />
      </Suspense>
    ),
    handle: { title: () => 'Dashboard' },
    children: [
      {
        index: true,
        element: (
          <Suspense key={ROUTE_PATHS.root} fallback={<FallbackComponent />}>
            <div>Dashboard</div>
          </Suspense>
        ),
      },
    ],
  },
]);

export default ROUTES;
