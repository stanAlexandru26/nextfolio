import clsxm from '@/lib/clsxm';
import { Icon } from '@iconify/react';

export default function ButtonWithIcon({ icon, href, className, children }) {
  return (
    <a
      data-splitbee-event={`Went on ${href}`}
      target='_blank'
      rel='nofollow noopener noreferrer'
      aria-label={`${icon} icon`}
      href={href}
      className={clsxm(
        'flex h-8 w-8 items-center justify-center transition-all',
        'rounded-lg opacity-70 ring-slate-400 hover:opacity-100 hover:ring-2 dark:ring-slate-600'
      )}
    >
      {icon && <Icon icon={icon} className={clsxm('h-5 w-5', className)} />}
      {children}
    </a>
  );
}
