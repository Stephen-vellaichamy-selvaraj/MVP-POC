// /utils/ContentfulApi.js

export default class ContentfulApi {

    static async callContentful(query, preview) {      

      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENV}/`;

      const bearerToken = preview == "1" ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN;
      const isPreviewFlag = preview == "1" ? true : false;
 
      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${
            bearerToken
          }`,          
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables:{"isPreview": isPreviewFlag}}),
      };
  
      try {
        const data = await fetch(fetchUrl, fetchOptions).then((response) =>
          response.json(),
        );
        return data;
      } catch (error) {
        throw new Error("Could not fetch data from Contentful!");
      }
    }

    static async callPim(query, preview) {      

      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.PIM_SPACE_ID}/environments/${process.env.CONTENTFUL_ENV}/`;

      const bearerToken = preview == "1" ? process.env.PIM_PREVIEW_ACCESS_TOKEN : process.env.PIM_ACCESS_TOKEN;
      const isPreviewFlag = preview == "1" ? true : false;
 
      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${
            bearerToken
          }`,          
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables:{"isPreview": isPreviewFlag}}),
      };
  
      try {
        const data = await fetch(fetchUrl, fetchOptions).then((response) =>
          response.json(),
        );
        return data;
      } catch (error) {
        throw new Error("Could not fetch data from Contentful!");
      }
    }    

    static async getLandingPage(slug, preview){

      const HeroBannerCarousel = `... on ComponentHeroBanner{
              __typename
              sys{id}
              slidersCollection(limit:5){
                items{
                  ...topicImageWithCaptionFields
                }
              }
              smallBannersCollection(limit:2){
                items{
                  ...topicImageWithCaptionFields
                }
              }
            }`;

      const CallActionArea = `... on ComponentCallActionArea{     
              callActionSection{
                ...ctaFields
              }
            }`;

      const BannerArea = `... on ComponentBannerArea{
            __typename
            sys{id}
            internalName
            bannersCollection(limit:2)
            {
              items{
								...topicImageWithCaptionFields
              }
            }
          }`

      const ShippingInfor =`... on ComponentShippingInfo{
        sys{id}
        __typename        
        infosCollection(limit:4){
          items{
            sys{id}
            __typename
            title
            description
            theme
          }
        }
      }`

      //****Query Builder Starts*****/
      const QueryComponentList = `query getComponents($isPreview:Boolean) {
          pageLandingCollection(where: { slug: "${slug}" }, limit: 1, preview: $isPreview) {
            items {
              componentSectionCollection(limit: 20) {
                items {
                  ... on Entry {
                    __typename
                  }                    
                }
              }
            }
          }
      }`

      //console.log(QueryComponentList);

      const getComponentSelectionResponse = await this.callContentful(QueryComponentList, preview)        

      //console.log(`ComponentSelectionResponse: ${JSON.stringify(getComponentSelectionResponse)}`)
      
      const Sections = getComponentSelectionResponse?.data?.pageLandingCollection?.items[0]?.componentSectionCollection?.items;

      //console.log(`Sections: ${Sections}`)

      let componentNames= [];

      Sections && Sections?.map((section) =>
        {
          if (section!== undefined && section!== null){
            componentNames.push(section?.__typename)
          }
          else{
            console.log("Components not found")
          }
        }
      )

      //console.log(`componentNames: ${componentNames}`)

      let queryStr = "";
      componentNames && componentNames?.map((section, index) => {
        const SwitchComponents= {
          ComponentHeroBanner : HeroBannerCarousel,
          ComponentCallActionArea : CallActionArea,
          ComponentBannerArea: BannerArea,
          ComponentShippingInfo: ShippingInfor
        };
        
        //console.log(`section: ${section}`)

        if (section!== undefined && section!== null){
          queryStr = queryStr + SwitchComponents[section && section];           
        }
      })
      
      //console.log(`queryStr: ${queryStr}`)

      // build query
      const queryString = `
        query($isPreview:Boolean) {
          pageLandingCollection(where: { slug: "${slug}" }, limit: 1, preview: $isPreview) {
            items {
              sys {id}
              __typename
              seoMeta{
                pageTitle
                pageDescription
              }
              componentSectionCollection(limit: 10) {
                items {
                  ... on Entry {
                    __typename
                    sys {id}
                  }
                  ${queryStr}
                }
              }
            }
          }
        }
        fragment topicImageWithCaptionFields on TopicImageWithCaption{
          __typename
          sys{id}
          title
          subTitle
          image{url}
          description
          cta{
            title
            description
            callToAction
            buttonText
          }
        }
        fragment ctaFields on TopicCta{
          __typename
          sys{id}
          title
          description
          callToAction
          buttonText
        }
      `        
      //console.log(queryString);

      const response = await this.callContentful(queryString, preview);

      const landingPages = response?.data?.pageLandingCollection
                              ? response?.data?.pageLandingCollection
                              : null;  

      return landingPages;

    }

    static async getAllLandingPages( preview ){
      
      //build the query
      const query=`query($isPreview:Boolean) {
        pageLandingCollection(limit: 10,preview: $isPreview) {
          items {
            slug
            }
        }
      }`

      // Call out to the API
      const response = await this.callContentful( query, preview );

      const landingPages = response?.data?.pageLandingCollection

      return landingPages;

    }  

    static async getLandingPageBySlug(slug, preview){
      
      // build query
      const query = `
        query($isPreview:Boolean) {
          pageLandingCollection(where: { slug: "${slug}" }, limit: 1, preview: $isPreview) {
            items {
							slug
            }
          }
        }
      `

      ////console.log(query);

      // Call out to the API
      const response = await this.callContentful(query, preview);

      const landingPages = response?.data?.pageLandingCollection
                              ? response?.data?.pageLandingCollection
                              : null;  

      return landingPages;

    }    
    
    static async getAllDetailPage( preview )
    {      
      const query=`query($isPreview:Boolean){
        productCollection(limit:50, preview: $isPreview){       
          items{
            slug
          }
        }
      }`
      
      // Call out to the API
      const response = await this.callPim( query, preview );

      const productCollection = response?.data?.productCollection

      return productCollection;      

    }
    
    static async getDetailPage(slug, preview){
      
      //build the query
      const query=`query($isPreview:Boolean){
        productCollection(where: { slug: "${slug}" }, preview: $isPreview){
          items{
            __typename
            sys{id}
            slug     
            __typename
            sys{id}      
            slug
            title
            description
            image{url}
            category
            leftPanel{json}
            rightPanel{json}
          }
        }
      }`

      // Call out to the API
      const response = await this.callPim(query, preview);

      const productCollection = response.data.productCollection
                              ? response.data.productCollection
                              : null;  

      return productCollection;

    }

    static async getBlogPageBySlug(slug, preview){
      
      //build the query
      const query=`query($isPreview:Boolean){
        pageBlogPostCollection(where: { slug: "${slug}" }, preview: $isPreview){
          items{
            slug
          }
        }
      }`

      // Call out to the API
      const response = await this.callPim(query, preview);

      const pageBlogPostCollection = response.data.pageBlogPostCollection
                              ? response.data.pageBlogPostCollection
                              : null;  

      return pageBlogPostCollection;

    }       
}