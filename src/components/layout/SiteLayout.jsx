import Seo from '../Seo';
import { motion } from 'framer-motion';

export default function SiteLayout({ children, className, ...props }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };
  return (
    <motion.article
      className={className}
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.8, type: 'easeInOut' }}
    >
      <Seo seoData={props.seoData} />
      {children}
    </motion.article>
  );
}
