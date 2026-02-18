import { Link } from 'react-router';
import SignUpForm from '@/components/sign-up-form';
import ROUTE_PATHS from '@/constants/route-paths.ts';

export default function SignUpPage() {
  return (
    <div className="w-full">
      <div className="space-y-4 px-3 pt-3 text-center md:px-5 md:pt-10">
        <div className="text-2xl">Create your account</div>

        <SignUpForm />

        <div>
          <Link to={ROUTE_PATHS.auth}>Sign-in</Link>
        </div>
      </div>
    </div>
  );
}
