module.exports = {
  siteMetadata: {
    title: `Kia Orana Podcast`,
    description: ``,
    author: `Haydn Adams & Chantal Napa`,
    siteUrl: `https://kiaoranapodcast.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167875920-1",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://strapi-app1.herokuapp.com",
        contentTypes: [
          "podcast"
        ],
        queryLimit: 1000,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-buzzsprout',
      options: {
        // You will need to generate an access token and get the podcast ID from your account
        // https://github.com/Buzzsprout/buzzsprout-api#authentication
        token: '7dce05a13b9f4433f59a50cbefbe2236',
        podcastId: '1121474',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `starter-template-with-react-bootstrap`,
        short_name: `starter-with-react-bootstrap`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
