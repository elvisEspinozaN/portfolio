/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `EE Portfolio`,
    description: `Portfolio built with Gatsby`,
    titleTemplate: `%s | EE Portfolio`,
    url: `https://elvisespinoza.netlify.app`,
    twitterUsername: `@elvisEspinozaN`,
    image: `/mainimg.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337/api/`,
    //     queryLimit: 1000, // Defaults to 100
    //     collectionTypes: [
    //       {
    //         name: `experience`,
    //         endpoint: `experiences/?populate=desc`,
    //       },
    //     ],
    //     // singleTypes: [`home-page`, `contact`],
    //   },
    // },
  ],
}
