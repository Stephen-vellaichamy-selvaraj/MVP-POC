import { createClient } from 'contentful';

const client = createClient({
    space: 'azezrt2r2gyz',
    accessToken: 'W0E23OYOBUGjs3RCxkTKEYNH95HMjf358ezqrquJGxE',
})

// Retrieve the list of blog posts from Contentful
const getCategory = async () => {
  const response = await client.getEntries({
    content_type: 'product',
  }); 

  return response;
};

export default getCategory;