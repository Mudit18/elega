'use client'

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Footer from '../common/Footer';
import Loader from '../common/Loader';
import ScrollUpButton from '../common/ScrollUpButton';
import ReferAndEarn from './ReferAndEarn';
import ReferNavbar from './ReferNavbar';
import { useRouter } from 'next/navigation';

export default function Refer() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'authenticated' && session) {
    router.replace('/refer/dashboard');
  }

  if (status === 'loading') {
    return <Loader />
  }

  return (
    <>
      <ReferNavbar />
      <ReferAndEarn />
      <Footer />
      <ScrollUpButton />
    </>
  )
};