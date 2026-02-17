import { type PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import LoadingSpinner from '@/components/load-spinner';
import ROUTE_PATHS from '@/constants/route-paths.ts';
import useFirebaseAuthUser from '@/hooks/use-firebase-auth-user.ts';

export default function PublicRoute({ children }: PropsWithChildren) {
  const { isLoading, user } = useFirebaseAuthUser();

  if (isLoading) {
    return (
      <div className="flex h-[100vh] items-center justify-center p-5">
        <LoadingSpinner size={76} className="text-blue-600" />
      </div>
    );
  }

  if (!user) {
    return children;
  }

  return <Navigate to={ROUTE_PATHS.admin} />;
}
