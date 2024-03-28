'use client'
import Loader from '@/app/components/common/Loader';
import Cookies from 'js-cookie';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect } from 'react';

export default function JoinApp() {
  const router = useRouter();

  // Use Suspense to wrap the usage of useSearchParams
  return (
    <Suspense fallback={<Loader />}>
      <JoinContent />
    </Suspense>
  );
}

// Extracted component with the usage of useSearchParams
function JoinContent() {
  const params = useSearchParams();
  Cookies.set('refId', params.get('refId'));

  const router = useRouter();

  useEffect(() => {
    const redirectToDashboard = async () => {
      router.replace('/refer/dashboard');
    };

    redirectToDashboard();
  }, [router]);

  return <></>;
}
