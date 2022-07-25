import NowPlaying from './NowPlaying';

export default function Footer() {
  return (
    <footer className='sticky top-[100vh]  mb-4 flex flex-col '>
      <hr className='mb-4 w-full border-slate-300 dark:border-slate-800' />
      <NowPlaying />
      Hello
    </footer>
  );
}
