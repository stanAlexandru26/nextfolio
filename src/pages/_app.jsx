import App from 'next/app';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/layout/Layout';
import { fetchData } from '@/lib/fetchData';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ContactContext from '@/context/ContactContext';

function MyApp({ Component, pageProps, contactData }) {
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
      <ContactContext.Provider value={contactData}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContactContext.Provider>
    </ThemeProvider>
  );
}
MyApp.getInitialProps = async (appContext) => {
  const contactRes = await fetchData('/contact', {
    populate: 'deep',
  });
  const appProps = await App.getInitialProps(appContext);
  const props = { contactData: contactRes.data.attributes, ...appProps };
  return { ...props };
};
export default MyApp;
