'use client'

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Footer from '../common/Footer';
import Loader from '../common/Loader';
import ScrollUpButton from '../common/ScrollUpButton';
import ReferAndEarn from './ReferAndEarn';
import ReferNavbar from './ReferNavbar';

export default function Refer() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'authenticated' && session) {
    router.replace('/refer/dashboard');
  }

  if (status !== 'authenticated' && status !== 'loading') {
    return (
      <>
        <ReferNavbar />
        <ReferAndEarn />
        <Footer />
        <ScrollUpButton />
      </>
    )
  } else {
    return <Loader />
  }
};