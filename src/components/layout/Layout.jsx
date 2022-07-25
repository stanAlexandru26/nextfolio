import Navbar from './navbar/Navbar';

export default function Layout({ children }) {
  // Put Header or Footer Here
  return (
    <main className='layout'>
      <Navbar />
      {children}
    </main>
  );
}
