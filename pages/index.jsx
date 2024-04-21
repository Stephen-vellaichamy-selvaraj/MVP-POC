import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import SwitchComponents from '../components/Common/SwitchComponents';
import ContentfulApi from '../utils/ContentfulApi';

import Header from '../components/Common/Navbar/Header';
import NextSeoCommon from '../components/Common/NextSeoCommon';
import Footer from '../components/Common/Footer';
import getCategory from '../utils/Hooks/getCategory';
import getHeaderDataSource from '../utils/Hooks/getHeaderDataSource';

export async function getStaticProps( context ) {
  //console.log(`{Index context: ${JSON.stringify(context)}}`)  
  const res = await ContentfulApi.getLandingPage("home-page", context.draftMode? "1":"2")
  const Categories = await getCategory();
  const HeaderDatasource = await getHeaderDataSource();

  return {
    props: { homePageData: res? res?.items:null, categories: Categories? Categories?.items:null, HeaderDatasource: HeaderDatasource? HeaderDatasource?.items:null }, revalidate: 1
  }
}

export default function HomePage({ homePageData, categories,HeaderDatasource }) {

  if (!homePageData) return null

  const seoFields = homePageData[0] && homePageData[0]?.seoMeta
  const pageDataLiveUpdate = useContentfulLiveUpdates(homePageData);
  const Sections = pageDataLiveUpdate[0]?.componentSectionCollection?.items;
  const sysId = { sysId: pageDataLiveUpdate[0]?.sys?.id }  

  return (
    <>        
        <Header {...{categories,HeaderDatasource}}/>
        {seoFields && <NextSeoCommon {...seoFields} />}
        {          
          Sections && Sections?.map((section, index) => {
            if (!section) {
              console.log("Section not found!!!");
              return null
            }
            
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
        <Footer />
    </>
  )
}