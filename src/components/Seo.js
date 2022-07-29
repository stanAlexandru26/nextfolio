import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Seo({ seoData }) {
  const router = useRouter();

  const defaultMeta = {
    metaTitle: 'Stan Alexandru Stefan | Aspiring Front End Developer',
    siteName: 'Stan Alexandru Stefan | Portfolio',
    metaDescription:
      'My portfolio website. I am a front end developer with a passion for building beautiful and functional websites.',
    url: 'https://www.stefan-stan.dev',
    type: 'website',
    metaRobots: 'follow, index',

    metaImage: {
      data: {
        attributes: {
          url: 'https://res.cloudinary.com/doxtz9qsx/image/upload/v1659129527/Frame_1og_image_2aff9fe081.png',
          height: 630,
          width: 1200,
        },
      },
    },
  };
  const meta = {
    ...defaultMeta,
    ...seoData,
  };

  return (
    <Head>
      <title>{meta.metaTitle}</title>
      <meta name='robots' content={meta.metaRobots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.metaDescription} />
      <meta property='og:title' content={meta.metaTitle} />
      <meta
        name='image'
        property='og:image'
        content={meta.metaImage.data.attributes.url}
      />
      <meta
        property='og:image:width'
        content={meta.metaImage.data.attributes.width}
      />
      <meta
        property='og:image:height'
        content={meta.metaImage.data.attributes.height}
      />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={meta.siteName} />
      <meta name='twitter:title' content={meta.metaTitle} />
      <meta name='twitter:description' content={meta.metaDescription} />
      <meta name='twitter:image' content={meta.metaImage.data.attributes.url} />

      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}
const favicons = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon/apple-icon-57x57.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon/apple-icon-60x60.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon/apple-icon-72x72.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-76x76.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon/apple-icon-114x114.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicon/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/apple-icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-icon-180x180.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/manifest.json',
  },
];
