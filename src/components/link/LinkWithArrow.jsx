import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import clsxm from '@/lib/clsxm';

export default function LinkWithArrow({ href, text }) {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  return (
    <Link href={href} scroll={false}>
      <motion.a
        onHoverStart={() => {
          setIsAnimationPlaying(true);
        }}
        onHoverEnd={() => {
          setIsAnimationPlaying(false);
        }}
        className={clsxm(
          'flex flex-row items-center justify-center gap-1 hover:cursor-pointer ',
          'text-gray-600 hover:text-gray-800 dark:text-gray-400  dark:hover:text-gray-200'
        )}
      >
        <span>{text}</span>
        <motion.span animate={isAnimationPlaying ? { translateX: 7 } : null}>
          <Icon icon='fa6-solid:arrow-right' className='h-5 w-5' />
        </motion.span>
      </motion.a>
    </Link>
  );
}
