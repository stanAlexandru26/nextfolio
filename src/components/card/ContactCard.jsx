import { Icon } from '@iconify/react';

export default function ContactCard({ description, icon, path, title }) {
  return (
    <a
      aria-label={title}
      target='_blank'
      rel='nofollow noopener noreferrer'
      href={path}
      className='w-full rounded-2xl border border-gray-400 p-4 dark:border-gray-600'
    >
      <div className='flex flex-row items-center gap-2'>
        {icon && <Icon icon={icon} className='h-5 w-5' />}
        <h1 className='h5'>{title}</h1>
      </div>
      <p>{description}</p>
    </a>
  );
}
