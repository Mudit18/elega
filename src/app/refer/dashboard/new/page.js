'use client'

import NewReferral from '@/app/components/refer/dashboard/new/NewReferral';
import { useSession } from 'next-auth/react';
import React from 'react';

function NewReferralApp() {
  const { data: session } = useSession();

  return (
    <NewReferral user={session.user} />
  );
}

export default NewReferralApp;