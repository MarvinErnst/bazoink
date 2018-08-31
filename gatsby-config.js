module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'grav-source-plugin',
    //   options: {
    //     typePrefix: 'Klosterweg',
    //     nodeName: 'Pois',
    //     url: 'http://192.168.100.113:8080/klosterweg/klosterweg'
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-page-transitions',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    }
  ],
}
