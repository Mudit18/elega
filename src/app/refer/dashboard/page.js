'use client'

import Loader from '@/app/components/common/Loader';
import MyReferrals from '@/app/components/refer/dashboard/MyReferrals';
import { auth } from '@/app/firebase/firebase';
import { signInWithCustomToken } from 'firebase/auth';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

function DashboardApp() {
  const { data: session } = useSession();
  const [loggedIn, setLoggedIn] = useState(false);

  const signInWithFirebase = async (session) => {
    const response = await fetch("/api/createCustomToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: session.user }),
    });

    const customToken = await response.json();

    signInWithCustomToken(auth, customToken.token)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    if (session) {
      signInWithFirebase(session);
    }
  }, [session]);

  if (!loggedIn) {
    return <Loader />
  }
  
  return (
    <MyReferrals />
  );
}

export default DashboardApp;