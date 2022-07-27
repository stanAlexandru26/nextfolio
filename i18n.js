module.exports = {
  locales: ['en', 'ro'],
  defaultLocale: 'en',
  pages: {
    '*': ['layout'],
    '/': ['common'],
    '/about': ['about'],
    '/projects': ['projects'],
    '/projects/[project]': ['projects'],
  },
};
