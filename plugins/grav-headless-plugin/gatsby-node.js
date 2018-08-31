
const axios = require('axios').default
const createNodeHelpers  = require('gatsby-node-helpers').default
const slug = require('slug')

exports.sourceNodes = async ({boundActionCreators}, configOptions) => {
    const {createNode} = boundActionCreators
    delete configOptions.plugins
    console.log(configOptions)
    const data = await fetchProducts(configOptions.typePrefix, configOptions.nodeName, configOptions.url)
    data.forEach(x => {
        createNode(x)
    })

    return
}

fetchProducts = async (typePrefix, nodeName, url) => {
    const {
        createNodeFactory,
        generateNodeId,
        generateTypeName
    } = createNodeHelpers({
        typePrefix
    })

    const ProductNode = createNodeFactory(nodeName, node => {
        return node
    })

    try
    {
        // This is where we call Grav API.
        const response = await axios.get(url, {
            params: {
                "return-as": "json"
            }
        })

        return response.data.children
            .map(x => x.header)
            .map(x => Object.assign(x, {
                userDefinedId: x.id,
                path: `/pois/${slug(x.name)}-${slug(x.id)}`.toLowerCase()
            }))
            .map(ProductNode)
    }
    catch (error) {
        console.log(error)
        throw error
    }
}