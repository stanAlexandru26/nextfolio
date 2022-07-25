import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import { Icon } from '@iconify/react';

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <div className='mb-8 flex w-full flex-row-reverse items-center space-x-0 sm:flex-row sm:space-x-2'>
      <Icon icon='logos:spotify-icon' className='h-5 w-5' />

      <div className='inline-flex w-full max-w-full flex-col truncate sm:flex-row'>
        {data?.songUrl ? (
          <a
            className='max-w-max truncate font-medium  '
            href={data.songUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            {data.title}
          </a>
        ) : (
          <p className=' font-semibold'>Not Playing</p>
        )}
        <span className=' mx-2 hidden sm:block'>{' – '}</span>
        <p className=' max-w-max truncate text-gray-500 dark:text-gray-300'>
          {data?.artist ?? 'Spotify'}
        </p>
      </div>
    </div>
  );
}
