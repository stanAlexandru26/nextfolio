import { Menu } from '@headlessui/react';
import { Icon } from '@iconify/react';
import clsxm from '@/lib/clsxm';
import navbarData from '@/data/navbarData';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';

export default function ToggleMiniNav() {
  const { t } = useTranslation('layout');
  const router = useRouter();

  return (
    <>
      <Menu>
        <Menu.Button
          className={clsxm(
            'relative flex h-8 w-8 items-center justify-center rounded-lg transition-all',
            'bg-slate-300 opacity-75 ring-slate-400 hover:opacity-100 hover:ring-2 dark:bg-slate-700 dark:ring-slate-600'
          )}
        >
          <Icon icon='mdi:hamburger' className='h-5 w-5' />
        </Menu.Button>
        <Menu.Items
          className={clsxm(
            'absolute top-16 z-30 w-32',
            'rounded-2xl border border-gray-300   bg-slate-200 dark:border-gray-700 dark:bg-slate-900'
          )}
        >
          <div className='flex flex-col justify-evenly'>
            {navbarData.map(({ title, name, href, icon }) => (
              <Menu.Item key={title}>
                <MyLink href={href}>
                  <Icon icon={icon} className='h-4 w-4' />

                  <p
                    className={clsxm(
                      router.asPath === href
                        ? 'font-semibold  text-slate-600 dark:text-slate-200 '
                        : 'font-normal '
                    )}
                  >
                    {t(name)}
                  </p>
                </MyLink>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </>
  );
}

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a
        ref={ref}
        {...rest}
        className={clsxm(
          'flex flex-row items-center gap-2 px-4 py-2',
          'first:rounded-t-2xl last:rounded-b-2xl',
          'hover:bg-slate-300 dark:hover:bg-slate-700'
        )}
      >
        {children}
      </a>
    </Link>
  );
});
