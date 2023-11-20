'use client';

import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import React, { PropsWithChildren, FC, useEffect } from 'react';
import toast from 'react-hot-toast';

const ClientWrapper: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          const { uid } = user;
          toast.success('Welcome back!');
          console.log('user is signed in', uid);
        } else {
          toast.error('Please sign in');
          console.log('user is not signed in');
        }
      } catch (error) {
        console.error(error);
      }
    });
  }, []);

  return <>{children}</>;
};

export default ClientWrapper;
