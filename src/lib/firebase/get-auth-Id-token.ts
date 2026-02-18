import { type Auth, getIdToken } from 'firebase/auth';

export default async function getAuthIdToken(auth: Auth) {
  await auth.authStateReady();

  if (!auth.currentUser) return;

  return await getIdToken(auth.currentUser);
}
