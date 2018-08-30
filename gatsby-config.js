module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'grav-headless-plugin',
      options: {
        typePrefix: 'Klosterweg',
        nodeName: 'Pois',
        url: 'http://192.168.100.113:8080/klosterweg/klosterweg'
      },
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
