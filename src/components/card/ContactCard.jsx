import { Icon } from '@iconify/react';

export default function ContactCard({ description, icon, path, title }) {
  return (
    <a
      data-splitbee-event={`Click on ${title}`}
      aria-label={title}
      target='_blank'
      rel='nofollow noopener noreferrer'
      href={path}
      className='flex w-full flex-col gap-4 rounded-2xl border border-gray-400 p-4 dark:border-gray-600'
    >
      <div className='flex flex-row items-center gap-2'>
        {icon && <Icon icon={icon} className='h-5 w-5' />}
        <h1 className='h5'>{title}</h1>
      </div>
      <p>{description}</p>
    </a>
  );
}
