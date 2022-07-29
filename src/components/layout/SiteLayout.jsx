import Seo from '../Seo';

export default function SiteLayout({ children, className, ...props }) {
  return (
    <article className={className}>
      <Seo seoData={props.seoData} />
      {children}
    </article>
  );
}
