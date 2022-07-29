/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  siteUrl: 'https://www.stefan-stan.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  alternateRefs: [
    {
      href: 'https://www.stefan-stan.dev/en',
      hreflang: 'en',
    },
    {
      href: 'https://www.stefan-stan.dev/ro',
      hreflang: 'ro',
    },
  ],
  exclude: ['/404'],
};
