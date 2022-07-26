import ProjectCard from '@/components/card/ProjectCard';
import { fetchData } from '@/lib/fetchData';

export default function Home({
  projectData,
  homePageData,
  portfolioPageData,
  contactData,
}) {
  const sortArray = function (array, n) {
    if (array == null) return void 0;
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
  };
  const { intro, headshot } = homePageData;
  return (
    <section className='space-y-8'>
      <div className='flex flex-col-reverse items-start justify-between sm:flex-row'>
        <div className='flex flex-col gap-4 pr-8'>
          <h1>{contactData.name}</h1>
          <p className='h4'>{contactData.profession}</p>
          <p className='text-gray-600 dark:text-gray-400'>{intro}</p>
        </div>
      </div>
      <h2>Latest Projects</h2>
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
    </section>
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
  const contactRes = await fetchData('/contact', {
    populate: 'deep',
  });

  return {
    props: {
      homePageData: homePageRata.data.attributes,
      projectData: projectRes.data,
      portfolioPageData: portfolioPageRes.data.attributes,
      contactData: contactRes.data.attributes,
    },
    revalidate: 1,
  };
};
