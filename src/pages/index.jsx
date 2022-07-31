import Image from 'next/image';
import { fetchData } from '@/lib/fetchData';
import useTranslation from 'next-translate/useTranslation';

import ProjectCard from '@/components/card/ProjectCard';
import SiteLayout from '@/components/layout/SiteLayout';
import LinkWithArrow from '@/components/link/LinkWithArrow';

export default function Home({ projectData, homePageData, portfolioPageData }) {
  const sortArray = function (array, n) {
    if (array == null) return void 0;
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
  };
  const { intro, headshot, name, profession, seo } = homePageData;
  const { t } = useTranslation('layout');

  return (
    <SiteLayout className='space-y-8' seoData={seo}>
      <div className='flex flex-col-reverse items-start justify-between sm:flex-row'>
        <div className='flex flex-col gap-4 pr-8'>
          <h1>{name}</h1>
          <p className='h4'>{profession}</p>
          <p className='text-gray-600 dark:text-gray-400'>{intro}</p>
        </div>
        <div className='shrink-0 rounded-full p-[2px]'>
          <Image
            alt={headshot.data.attributes.alternativeText}
            height={110}
            width={110}
            src={headshot.data.attributes.url}
            className='rounded-full'
          />
        </div>
      </div>
      <h2>{t('latest_projects')}</h2>
      <p className='text-gray-600 dark:text-gray-400 '>
        {portfolioPageData.shortDescription}
      </p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {sortArray(projectData, 3)
          .reverse()
          .map((project) => (
            <ProjectCard key={project.attributes.id} {...project.attributes} />
          ))}
      </div>
    </SiteLayout>
  );
}

export const getStaticProps = async ({ locale }) => {
  const homePageRata = await fetchData('/homepage', {
    populate: 'deep',
    locale: locale,
  });

  const projectRes = await fetchData('/projects', {
    populate: {
      stacks: { populate: '*' },
    },
    locale: locale,
    sort: ['order:asc'],
  });
  const portfolioPageRes = await fetchData('/portfolio', {
    populate: '*',
    locale: locale,
  });

  return {
    props: {
      homePageData: homePageRata.data.attributes,
      projectData: projectRes.data,
      portfolioPageData: portfolioPageRes.data.attributes,
    },
    revalidate: 1,
  };
};
