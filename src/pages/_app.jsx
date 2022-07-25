import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
