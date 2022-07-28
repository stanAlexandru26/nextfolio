import ContactCard from '@/components/card/ContactCard';
import TechCard from '@/components/card/TechCard';
import { fetchData } from '@/lib/fetchData';
import useTranslation from 'next-translate/useTranslation';
import ReactMarkdown from 'react-markdown';

export default function About({ aboutData, skillData, contactData }) {
  const { bio, skills } = aboutData;
  const { github, linkedIn, email } = contactData;

  const { t } = useTranslation('about');
  return (
    <section className='space-y-8'>
      <h1>{t('about_title')}</h1>
      <p>{bio.long}</p>
      <h1>{t('skills_title')}</h1>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <ReactMarkdown className='prose  dark:prose-invert'>
          {skills.content}
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
      <ul className='grid w-full grid-cols-1 gap-4 text-gray-600 dark:text-gray-400 md:grid-cols-3 md:flex-row'>
        <ContactCard
          path={`mailto:${email}`}
          title='E-mail'
          description={email}
          icon='ci:mail'
        />
        <ContactCard
          path={linkedIn}
          title='LinkedIn'
          description={t('about_contact.linkedin')}
          icon='fa-brands:linkedin-in'
        />
        <ContactCard
          path={github}
          title='GitHub'
          description={t('about_contact.github')}
          icon='fa:github'
        />
      </ul>
    </section>
  );
}
export const getStaticProps = async ({ locale }) => {
  const aboutRes = await fetchData('/about', {
    populate: 'deep',
    locale: locale,
  });
  const contactRes = await fetchData('/contact', {
    populate: 'deep',
  });
  return {
    props: {
      aboutData: aboutRes.data.attributes,
      skillData: aboutRes.data.attributes.stacks.data,
      contactData: contactRes.data.attributes,
    },
    revalidate: 1,
  };
};
