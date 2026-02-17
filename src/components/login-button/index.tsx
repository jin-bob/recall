import { Link } from 'react-router';
import { signOut } from 'firebase/auth';
import { Button } from '@/components/ui/button.tsx';
import ROUTE_PATHS from '@/constants/route-paths.ts';
import useFirebaseAuthUser from '@/hooks/use-firebase-auth-user.ts';
import { auth } from '@/lib/firebase';

async function handleLogout() {
  await signOut(auth);
}

export default function LoginButton() {
  const { user, isLoading } = useFirebaseAuthUser();

  if (isLoading) {
    return <div className="invisible h-4 w-4" />;
  }

  if (user) {
    return (
      <Button onClick={handleLogout} className="text-white" variant="link">
        Sign Out
      </Button>
    );
  }

  return (
    <Link to={ROUTE_PATHS.auth} className="text-white">
      Sign In
    </Link>
  );
}
