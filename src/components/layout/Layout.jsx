import Footer from './footer';
import Navbar from './navbar/Navbar';

export default function Layout({ children }) {
  return (
    <main className='layout'>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
