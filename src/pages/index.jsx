export default function Home() {
  return (
    <main>
      <section className=''>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
          <h1 className='mt-4'>Next.js + Tailwind CSS</h1>
          <h2 className='mt-4'>Next.js + Tailwind CSS</h2>
          <h3 className='mt-4'>Next.js + Tailwind CSS</h3>
          <h4 className='mt-4'>Next.js + Tailwind CSS</h4>
          <h5 className='mt-4'>Next.js + Tailwind CSS</h5>
          <h6 className='mt-4 '>Next.js + Tailwind CSS</h6>
          

          <footer className='absolute  bottom-2  text-gray-700'>
            {new Date().getFullYear()}
          </footer>
        </div>
      </section>
    </main>
  );
}
