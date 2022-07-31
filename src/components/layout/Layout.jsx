import { useEffect, useState } from 'react';
import ScrollTopButton from '../button/ScrollTopButton';
import Footer from './footer';
import Navbar from './navbar/Navbar';

export default function Layout({ children }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setInView(window.pageYOffset > 150);
    };

    addEventListener('scroll', toggleVisibility);
    return () => removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <main className='layout'>
      <Navbar />
      {children}
      <Footer />
      <ScrollTopButton inView={inView} />
    </main>
  );
}
