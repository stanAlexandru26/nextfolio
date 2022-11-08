import Link from 'next/link';
import { Icon } from '@iconify/react';
import clsxm from '@/lib/clsxm';

export default function LinkWithArrow({ href, text }) {
  return (
    <Link href={href} scroll={false} >
      <div
        className={clsxm(
          'flex flex-row items-center justify-center gap-1 hover:cursor-pointer ',
          'text-gray-600 hover:text-gray-800 dark:text-gray-400  dark:hover:text-gray-200'
        )}
      >
        <span>{text}</span>
        <Icon icon='fa6-solid:arrow-right' className='h-5 w-5' />
      </div>
    </Link>
  );
}
