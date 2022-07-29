import TechCard from '@/components/card/TechCard';
import SiteLayout from '@/components/layout/SiteLayout';
import DeploymentLink from '@/components/link/DeploymentLink';
import { fetchData } from '@/lib/fetchData';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function ProjectPage({ projectData }) {
  const {
    title,
    description,
    stacks,
    repositoryURL,
    deploymentURL,
    images,
    highlights,
    seo,
  } = projectData;
  const { t } = useTranslation('projects');

  const photos = images.data?.map((image) => ({
    src: image.attributes.url,
    width: image.attributes.width,
    height: image.attributes.height,
    alt: image.attributes.alt,
  }));

  return (
    <SiteLayout className='space-y-8' seoData={seo}>
      <h1>{title}</h1>
      <p>{description}</p>
      {highlights && (
        <>
          <h2>{t('individual_project_highlight')}</h2>
          <ReactMarkdown className='prose text-slate-600 dark:prose-invert dark:text-slate-400 '>
            {highlights}
          </ReactMarkdown>
        </>
      )}

      {stacks && (
        <div className='grid grid-cols-3 gap-2'>
          {stacks.data?.map((s) => (
            <TechCard
              key={s.id}
              title={s.attributes.title}
              href={s.attributes.url}
              image={s.attributes.icon.data?.attributes.url}
            />
          ))}
        </div>
      )}
      {(deploymentURL || repositoryURL) && (
        <>
          <h2>{t('individual_project_deployment_title')}</h2>
          <ul className='flex gap-2'>
            {deploymentURL && (
              <DeploymentLink
                icon='fa:external-link'
                href={deploymentURL}
                text={t('individual_project_deployment_url')}
              />
            )}
            {repositoryURL && (
              <DeploymentLink
                icon='fa:github'
                href={repositoryURL}
                text={t('individual_project_deployment_repository')}
              />
            )}
          </ul>
        </>
      )}

      <ul className='columns-1 sm:columns-2 '>
        {photos?.map((screenshot, index) => (
          <Image
            src={screenshot.src}
            key={index}
            height={screenshot.height}
            width={screenshot.width}
            alt={screenshot.alt}
          />
        ))}
      </ul>
    </SiteLayout>
  );
}

export const getStaticPaths = async ({ locales }) => {
  const res = await fetchData('/projects', {
    fields: 'slug',
  });

  const paths = res.data
    .map(({ attributes: p }) =>
      locales.map((locale) => ({
        params: {
          project: p.slug,
        },
        locale: locale,
      }))
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params, locale }) => {
  const { project } = params;

  const res = await fetchData('/projects', {
    locale: locale,
    filters: { slug: project },
    populate: {
      stacks: { populate: '*', sort: ['order:asc'] },
      links: { populate: '*' },
      thumbnail: { populate: '*' },
      preview: { populate: '*' },
      images: { populate: 'deep' },
    },
  });

  const projectData = res.data[0].attributes;

  return {
    props: {
      projectData,
      params,
    },
    revalidate: 1,
  };
};
