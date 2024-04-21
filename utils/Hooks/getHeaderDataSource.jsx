import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

// Retrieve the list of blog posts from Contentful
const getHeaderDataSource = async () => {
  const response = await client.getEntries({
    content_type: 'headerDataSource',
  }); 

  return response;
};

export default getHeaderDataSource;