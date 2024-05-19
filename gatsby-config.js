/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TalentTap`,
    siteUrl: `https://www.interviewtoast.com`,
    author: `Bidisha Mondal`,
    description: `Interview preparation, assessment and feedback tool`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "TalentTap",
        short_name: "TalentTap",
        start_url: "/",
        background_color: "#FB923D",
        theme_color: "#FB923D",
        display: "standalone",
        icon: `src/images/favicon.png`,
      },
    },
  ],
}