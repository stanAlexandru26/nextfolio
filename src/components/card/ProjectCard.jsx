import clsxm from '@/lib/clsxm';
import Link from 'next/link';
import ButtonWithIcon from '../button/ButtonWithIcon';

export default function ProjectCard({
  title,
  slug,
  repositoryURL,
  deploymentURL,
  stacks,
}) {
  return (
    <article
      className={clsxm(
        'flex flex-col justify-between gap-2 p-4 md:gap-4',
        'rounded-2xl border border-gray-300 dark:border-gray-700'
      )}
    >
      <h1 className='h5'>{title}</h1>
      {stacks && (
        <ul className='flex flex-col gap-1'>
          {stacks.data.map((stack) => (
            <li className='text-xs ' key={stack.attributes.id}>
              {stack.attributes.title}
            </li>
          ))}
        </ul>
      )}
      <div className='flex w-full flex-row items-center justify-between '>
        {slug && <Link href={`/projects/${slug}`}>Learn More</Link>}
        <div className='flex justify-end gap-2'>
          {repositoryURL && (
            <ButtonWithIcon icon='fa:github' path={repositoryURL} />
          )}
          {deploymentURL && (
            <ButtonWithIcon icon='fa:external-link' path={deploymentURL} />
          )}
        </div>
      </div>
    </article>
  );
}
