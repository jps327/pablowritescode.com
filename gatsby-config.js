module.exports = {
  siteMetadata: {
    title: 'Juan Pablo Sarmiento',
    fullName: 'Juan Pablo Sarmiento',
    jobTitleShort: 'Software Engineer',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@PabloSarmiento',

    menuLinks: [
      { label: 'Home', to: '/' },
      { label: 'Talks', to: '/talks/' },
      { label: 'Contact', to: '/contact/' },
    ],

    talks: [
      {
        eventTitle: 'Bytes of Good Podcast',
        eventLink: 'https://bytesofgood.org/',
        talkTitle: 'Ep 1: Zenysis & the Cholera Outbreak in Mozambique',
        talkLink: 'https://open.spotify.com/episode/3chLLECuKLd6h1pk5s64ww',
        years: [2020],
      },
      {
        eventTitle: 'Global Digital Development Forum',
        eventLink: 'https://digitaldevforum.com/',
        talkTitle: 'Engineering For Humanitarian Response',
        talkLink: 'https://www.youtube.com/watch?v=pwBq97HLbb0',
        years: [2020],
      },
      {
        eventTitle: 'Impact Fellowship',
        eventLink: 'https://www.impactlabs.io/fellowship/',
        talkTitle: 'Social Impact Software 101',
        years: [2018, 2019, 2020],
      },
      {
        eventTitle: 'Impact Summit',
        eventLink: 'https://www.impactlabs.io/summit/',
        talkTitle: 'Social Impact Software 101',
        years: [2018, 2019],
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
