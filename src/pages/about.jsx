import ReactMarkdown from 'react-markdown';
import useTranslation from 'next-translate/useTranslation';
import ContactCard from '@/components/card/ContactCard';
import TechCard from '@/components/card/TechCard';
import { fetchData } from '@/lib/fetchData';
import contactData from '@/data/contactData';
import SiteLayout from '@/components/layout/SiteLayout';

export default function About({ aboutData, skillData }) {
  const { bio, skills, seo } = aboutData;

  const { t } = useTranslation('about');
  return (
    <SiteLayout className='space-y-8' seoData={seo}>
      <h1>{t('about_title')}</h1>
      <p>{bio.long}</p>
      <h1>{t('skills_title')}</h1>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <ReactMarkdown className='prose  dark:prose-invert'>
          {skills}
        </ReactMarkdown>

        <ul className='grid basis-3/4 grid-cols-3 gap-2'>
          {skillData?.map((s) => (
            <TechCard
              key={s.id}
              title={s.attributes.title}
              image={s.attributes.icon.data.attributes.url}
              href={s.attributes.url}
            />
          ))}
        </ul>
      </div>
      <ul className='grid  grid-cols-1 gap-4 md:grid-cols-3 md:flex-row'>
        {contactData.map((contact) => (
          <li key={contact.title}>
            <ContactCard
              path={contact.href}
              title={contact.title}
              description={t(contact.description)}
              icon={contact.icon}
            />
          </li>
        ))}
      </ul>
    </SiteLayout>
  );
}
export const getStaticProps = async ({ locale }) => {
  const aboutRes = await fetchData('/about', {
    populate: 'deep',
    locale: locale,
  });
  return {
    props: {
      aboutData: aboutRes.data.attributes,
      skillData: aboutRes.data.attributes.stacks.data,
    },
    revalidate: 1,
  };
};
