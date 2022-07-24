export default function Home() {
  return (
    <main>
      <section className='bg-yellow-500'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
          <h1 className='mt-4'>Next.js + Tailwind CSS</h1>

          <footer className='absolute  bottom-2  text-gray-700'>
            {new Date().getFullYear()}
          </footer>
        </div>
      </section>
    </main>
  );
}
