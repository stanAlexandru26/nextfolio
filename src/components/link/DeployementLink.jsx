import clsxm from '@/lib/clsxm';
import { Icon } from '@iconify/react';

export default function DeployementLink({ icon, href, text }) {
  return (
    <a
      href={href}
      className={clsxm(
        'flex items-center justify-center rounded-2xl border px-2 py-1',
        'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200',
        'border border-gray-300 dark:border-gray-700'
      )}
    >
      <Icon icon={icon}/>
      <span className='px-2 py-1 text-xs font-semibold '>
        {text}
      </span>
    </a>
  );
}
