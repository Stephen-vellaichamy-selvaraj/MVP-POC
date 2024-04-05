import algoliasearch from 'algoliasearch'

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID
const ALGOLIA_API_TOKEN = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
const ALGOLIA_INDEX = process.env.NEXT_PUBLIC_ALGOLIA_PRODUCT_INDICES

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_TOKEN)
const index = client.initIndex(ALGOLIA_INDEX)

export const getPostsData = async (query = '') => {
  try {
    const data = await index.search(query)
    return {
      posts: data.hits,
    }
  } catch (error) {
    return undefined
  }
}