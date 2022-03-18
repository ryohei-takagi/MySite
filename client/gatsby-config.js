/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: `Ryohei Takagi's Profile site`,
    siteUrl: `https://ryohei-takagi.me`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          "G-2VYV2GCB8R",
        ],
        pluginConfig: {
          head: true,
        }
      }
    }
  ]
};
