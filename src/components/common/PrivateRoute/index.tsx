'use client';

import useUser from '@/hooks/useUser';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const PrivateRoute = ({ children }: any) => {
  const router = useRouter();

  const user = useUser();
  useEffect(() => {
    if (user === null) router.push('/login');
  }, [router, user]);

  return <>{children}</>;
};

export default PrivateRoute;
