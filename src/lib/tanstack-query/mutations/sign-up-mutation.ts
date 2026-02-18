import { useMutation } from '@tanstack/react-query';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { createSingUpMutationKey } from '@/lib/tanstack-query/mutations/mutation-keys.ts';

type SignUpVariables = {
  email: string;
  password: string;
};

export default function useSignUpMutation() {
  return useMutation({
    mutationKey: [...createSingUpMutationKey(), 'sign-up'],
    mutationFn: async ({ email, password }: SignUpVariables) => {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      void sendEmailVerification(userCredential.user);

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
