import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import splitbee from '@splitbee/web';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    splitbee.init({
      scriptUrl: '/bee.js',
      apiUrl: '/_hive',
      disableCookie: true,
    });
  }, []);

  // if (typeof window !== 'undefined') {
  //   window.history.scrollRestoration = 'manual';
  // }
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
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
