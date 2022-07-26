import ProjectCard from '@/components/card/ProjectCard';
import SiteLayout from '@/components/layout/SiteLayout';
import { fetchData } from '@/lib/fetchData';
import useTranslation from 'next-translate/useTranslation';

export default function Projects({ projectData, portfolioPageData }) {
  const { longDescription, seo } = portfolioPageData;

  const { t } = useTranslation('projects');

  return (
    <SiteLayout className='space-y-8' seoData={seo}>
      <h1> {t('project_page_title')}</h1>
      <p>{longDescription}</p>

      <div className='flex w-full flex-col gap-4'>
        {projectData?.map((p) => (
          <ProjectCard key={p.id} {...p.attributes} />
        ))}
      </div>
    </SiteLayout>
  );
}
export const getStaticProps = async ({ locale }) => {
  const projectRes = await fetchData('/projects', {
    sort: ['order:desc'],
    locale: locale,
    populate: 'deep',
  });
  const portfolioPageRes = await fetchData('/portfolio', {
    populate: '*',
    locale: locale,
  });

  return {
    props: {
      projectData: projectRes.data,
      portfolioPageData: portfolioPageRes.data.attributes,
    },
    revalidate: 1,
  };
};
