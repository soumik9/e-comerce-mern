import { dashboardLayoutUrls } from '@/config/constants/constants';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import DashboardLayout from '@/components/Layout/DashboardLayout/DashboardLayout';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  // global
  const router = useRouter();

  // states
  const [laoding, setLoading] = useState(true);

  // checking the window
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoading(false);
    }
  }, []);

  // loading
  if (laoding) return <>Loading...</>

  // main component
  if (dashboardLayoutUrls.includes(router.pathname)) {
    return <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  } else {
    return <Component {...pageProps} />
  }
}
