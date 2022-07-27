import { Icon } from '@iconify/react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function Custom404() {
  const { t } = useTranslation('layout');

  return (
    <main>
      <section className='flex flex-col items-center justify-center gap-4'>
        <Icon
          icon='ri:alarm-warning-fill'
          width='60'
          height='60'
          className='text-red-500 '
        />

        <h1>{t('error_page_text')}</h1>
        <Link href='/'>{t('error_page_link')}</Link>
      </section>
    </main>
  );
}
