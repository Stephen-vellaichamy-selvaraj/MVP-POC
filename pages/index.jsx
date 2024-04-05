import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import SwitchComponents from '../components/Common/SwitchComponents';
import ContentfulApi from '../utils/ContentfulApi';

export async function getStaticProps( context ) {
  const { params } = context;
  const res = await ContentfulApi.getLandingPage("home-page", context.draftMode? "1":"2")
  return {
    props: { homePageData: res? res.items:null }, revalidate: 1
  }
}

export default function HomePage({ homePageData }) {

  //console.log("Home Page Data")

  if (!homePageData) return null  

  //console.log(homePageData)

  const pageDataLiveUpdate = useContentfulLiveUpdates(homePageData);
  const Sections = pageDataLiveUpdate[0]?.componentSectionCollection?.items;
  const sysId = { sysId: pageDataLiveUpdate[0]?.sys?.id }

  //console.log(`SysID: ${sysId}`)

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