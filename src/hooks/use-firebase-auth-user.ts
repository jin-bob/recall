import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import type { User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

type FirebaseAuthUserState = {
  isLoading: boolean;
  user: User | null;
};

export default function useFirebaseAuthUser() {
  const queryClient = useQueryClient();
  const [userState, setUserState] = useState<FirebaseAuthUserState>({
    isLoading: true,
    user: null,
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setUserState({ isLoading: false, user: null });

        return;
      }

      setUserState({ isLoading: false, user });
    });

    return () => {
      unsubscribe();
    };
  }, [queryClient]);

  return userState;
}
