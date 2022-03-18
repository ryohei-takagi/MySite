/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    siteUrl: "https://ryohei-takagi.me",
    siteType: "website",
    title: "RYOHEI TAKAGI | DevOps Engineer & Architect",
    description: "Ryohei Takagi's Profile site. I'm DevOps Engineer & Architect.",
    imageUrl: "https://ryohei-takagi.me/images/ogp.png",
    twitterCard: "summary",
    twitterUserName: "@rtflatspace1"
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
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
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Ryohei Takagi's Profile site",
        short_name: "Ryohei Takagi",
        start_url: "/",
        background_color: "#F7F6F5",
        theme_color: "#F7F6F5",
        display: "minimal-ui",
        icon: "src/images/profile_1.png",
      },
    },
  ]
};
