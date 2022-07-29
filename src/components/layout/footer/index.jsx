import useTranslation from 'next-translate/useTranslation';
import ReactMarkdown from 'react-markdown';
import NowPlaying from './NowPlaying';

export default function Footer() {
  const { t } = useTranslation('layout');

  return (
    <footer className='sticky top-[100vh]  mb-4 flex flex-col '>
      <hr className='my-4 w-full border-slate-300 dark:border-slate-800' />
      {/* <NowPlaying /> */}
      <ReactMarkdown
        components={{
          a: FooterLink,
        }}
      >
        {t('footer')}
      </ReactMarkdown>
    </footer>
  );
}
export function FooterLink({ children, ...props }) {
  return (
    <a className='hover:text-slate-800  dark:hover:text-slate-200 ' {...props}>
      {children}
    </a>
  );
}
