import SignInForm from '@/components/sign-in-form';

export default function SignInPage() {
  return (
    <div className="w-full">
      <div className="space-y-4 px-3 pt-3 text-center md:px-5 md:pt-10">
        <div className="text-2xl">Hi, login to your existent account.</div>

        <SignInForm />
      </div>
    </div>
  );
}
