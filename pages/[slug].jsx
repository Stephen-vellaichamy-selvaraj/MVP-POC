import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import SwitchComponents from '../components/Common/SwitchComponents';
import ContentfulApi from "../utils/ContentfulApi";
// import NextSeoCommon from '../components/Accessories/NextSeoCommon';

export const getStaticPaths = async () => {
  const res = await ContentfulApi.getAllLandingPages()
  const paths = res.items.map(item => {
    return {
      params: { slug: item.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps( context ) {

  console.log("Slug Context Params draft mode:")
  console.log(context)  

  const res = await ContentfulApi.getLandingPage(context.params.slug, context.draftMode? "1":"2")

  if (!res.items.length){
    return{ 
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }  

  return {
    props: { slugPageData: res? res.items:null }, revalidate: 1
  }
}

export default function SlugPage({ slugPageData }) {

  //console.log("Home Page Data")

  if (!slugPageData) return null  

  console.log(slugPageData)

  const pageDataLiveUpdate = useContentfulLiveUpdates(slugPageData);
  const Sections = pageDataLiveUpdate[0]?.componentSectionCollection?.items;
  const sysId = { sysId: pageDataLiveUpdate[0]?.sys?.id }

  console.log(`SysID: ${sysId}`)

  return (
    <>
        
        {
          Sections && Sections?.map((section, index) => {

            if (!section) {
              console.log("Section not found!!!");
              return null
            }

            //console.log("Switcher :" + section?.__typename); 

            const Switcher = SwitchComponents[section.__typename];             

            if (!Switcher) {
              return null
            }
            else{
              return (
                <Switcher key={section.__typename} { ...section } {...sysId} />
              );
            }
        })
        }
    </>
  )
}