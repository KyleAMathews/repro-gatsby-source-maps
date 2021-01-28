/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Site Name',
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: { 
        isUsingColorMode: false,
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Halant', 'Nunito Sans']
        }
      }
    },
    'gatsby-plugin-workerize-loader',
  ],
  flags: {
    DEV_SSR: false,
  }
}
