import clsxm from '@/lib/clsxm';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ScrollTopButton({ inView }) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {inView && (
        <motion.button
          onClick={scrollTop}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={clsxm(
            'fixed bottom-4 right-4 rounded-full p-3',
            'bg-slate-300 dark:bg-slate-700 '
          )}
        >
          <Icon icon='bi:arrow-up' className='h-6 w-6' />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
