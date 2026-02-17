import { useMutation } from '@tanstack/react-query';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { createAuthMutationKey } from '@/lib/tanstack-query/mutations/mutation-keys.ts';

type SignInVariables = {
  email: string;
  password: string;
};

export default function useSignInMutation() {
  return useMutation({
    mutationKey: [...createAuthMutationKey(), 'sign-in'],
    mutationFn: async ({ email, password }: SignInVariables) => {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      return userCredential.user;
    },
    onSuccess: () => {
      console.log('success!!!');
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
}
