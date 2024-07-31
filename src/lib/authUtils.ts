import { Auth, signInWithPopup, UserCredential } from 'firebase/auth';

export async function handleSignInWithProvider(
  auth: Auth,
  provider: any
): Promise<UserCredential> {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return result;
  } catch (error) {
    throw error; 
  }
}
