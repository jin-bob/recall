import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from '@/lib/firebase/config.ts';

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
