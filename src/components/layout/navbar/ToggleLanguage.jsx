import { Popover } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import useTranslation from 'next-translate/useTranslation';
import clsxm from '@/lib/clsxm';

export default function ToggleLanguage() {
  const { t } = useTranslation('layout');
  const router = useRouter();
  const linkArray = [
    {
      label: t('language.romanian'),
      href: '/ro',
      locale: 'ro',
      icon: 'twemoji:flag-romania',
    },
    {
      label: t('language.english'),
      href: '/en',
      locale: 'en',
      icon: 'twemoji:flag-united-kingdom',
    },
  ];
  const changeLanguage = (locale) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <>
      <Popover className='relative'>
        <Popover.Button
          className={clsxm(
            'flex h-8 w-8 items-center justify-center rounded-lg transition-all',
            'bg-slate-300 opacity-75 ring-slate-400 hover:opacity-100 hover:ring-2 dark:bg-slate-700 dark:ring-slate-600'
          )}
        >
          <Icon icon='ion:language' className='h-5 w-5' />
        </Popover.Button>
        <Popover.Panel
          className={clsxm(
            'absolute top-1/2 left-1/2 z-30 mt-16 w-32 -translate-x-1/2 -translate-y-1/2',
            'rounded-2xl border border-gray-300 bg-slate-200 dark:border-gray-700 dark:bg-slate-900'
          )}
        >
          <div className='flex flex-col justify-evenly'>
            {linkArray.map((link) => (
              <button
                key={link.locale}
                onClick={() => {
                  changeLanguage(link.locale);
                }}
                className={clsxm(
                  'px-4 py-2',
                  'first:rounded-t-2xl last:rounded-b-2xl',
                  'hover:bg-slate-300 dark:hover:bg-slate-700',
                  router.locale === link.locale
                    ? 'font-semibold hover:cursor-not-allowed'
                    : 'hover:cursor-pointer'
                )}
              >
                <a
                  className='flex flex-row items-center gap-3'
                  disabled={router.locale === link.locale}
                >
                  <Icon icon={link.icon} className='h-6 w-6' />

                  {link.label}
                </a>
              </button>
            ))}
          </div>
        </Popover.Panel>
      </Popover>
    </>
  );
}
