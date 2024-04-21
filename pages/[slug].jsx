import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import SwitchComponents from '../components/Common/SwitchComponents';
import ContentfulApi from "../utils/ContentfulApi";

import Header from '../components/Common/Navbar/Header';
import NextSeoCommon from '../components/Common/NextSeoCommon';
import Footer from '../components/Common/Footer';
import getCategory from '../utils/Hooks/getCategory';
import getHeaderDataSource from '../utils/Hooks/getHeaderDataSource';

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

  const res = await ContentfulApi.getLandingPage(context.params.slug, context.draftMode? "1":"2")
  const Categories = await getCategory();

  const HeaderDatasource = await getHeaderDataSource();
  //console.log("Header Setting: ")
  //console.log(HeaderDatasource)

  if (!res.items.length){
    return{ 
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { slugPageData: res? res.items:null, categories: Categories? Categories?.items:null, HeaderDatasource: HeaderDatasource? HeaderDatasource?.items:null }, revalidate: 1
  }
}

export default function SlugPage({ slugPageData, categories, HeaderDatasource }) {

  if (!slugPageData) return null

  const pageDataLiveUpdate = useContentfulLiveUpdates(slugPageData);
  const Sections = pageDataLiveUpdate[0]?.componentSectionCollection?.items;
  const sysId = { sysId: pageDataLiveUpdate[0]?.sys?.id }
  const seoFields = slugPageData[0] && slugPageData[0]?.seoMeta

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