import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
