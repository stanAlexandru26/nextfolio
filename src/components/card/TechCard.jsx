import Link from 'next/link';
import Image from 'next/image';
import clsxm from '@/lib/clsxm';

export default function TechCard({ title, image, href }) {
  return (
    <Link
      href={href}
      className={clsxm(
        'flex flex-col items-center justify-center gap-2 rounded-2xl p-5',
        ' border border-gray-300 dark:border-gray-700 '
      )}>

      {image && <Image src={image} alt={title} width={40} height={50} />}
      <span className='font-medium'>{title}</span>

    </Link>
  );
}
