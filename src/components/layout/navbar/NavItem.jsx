import Link from 'next/link';
import { useRouter } from 'next/router';
import clsxm from '@/lib/clsxm';

export default function NavItem({ href, name }) {
  const router = useRouter();

  return (
    <li>
      <Link href={href} scroll={false} passHref>
        <a
          href='replace'
          className={clsxm(
            'p-1 px-3 transition-all sm:py-2 md:inline-block',
            'hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200',
            router.asPath === href
              ? 'font-semibold  text-slate-600 dark:text-slate-200 '
              : 'font-normal '
          )}
        >
          {name}
        </a>
      </Link>
    </li>
  );
}
