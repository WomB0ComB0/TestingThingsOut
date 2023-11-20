import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth as firebaseAuth } from '@/firebase/config';

export function useAuth() {
  const [user, setUser] = useState<User | null>(firebaseAuth.currentUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (auth) => {
      if (auth) {
        setUser(auth);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  return user;
}
