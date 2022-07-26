import { fetchData } from '@/lib/fetchData';

export default function Home({
  projectData,
  homePageData,
  portfolioPageData,
  contactData,
}) {
  console.log('🚀 ~ file: index.jsx ~ line 9 ~ contactData', contactData);
  const { intro, headshot } = homePageData;
  return (
    <section>
      <div className='flex flex-col-reverse items-start justify-between sm:flex-row'>
        <div className='flex flex-col gap-4 pr-8'>
          <h1>{contactData.name}</h1>
          <p className='h4'>{contactData.profession}</p>
          <p className='mb-12 text-gray-600 dark:text-gray-400 md:mb-16'>
            {intro}
          </p>
        </div>
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
