import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import ContentfulApi from '../../utils/ContentfulApi';
import RichTextDocument from '../../components/Common/RichTextDocument';

export const getStaticPaths = async () => { 
    const res = await ContentfulApi.getAllDetailPage()
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

export const getStaticProps = async (context) => {

    const res = await ContentfulApi.getDetailPage(context.params.slug, context.draftMode? "1":"2")
    
    if (!res.items.length){
      return{
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  
    return {
      props: { slugPageData: res.items}, revalidate: 10
    }
  
  }

export default function DetailPage({ slugPageData }) {

    if (!slugPageData) return null

    const pageData = useContentfulLiveUpdates(slugPageData[0]);

    const infosInsProps = useContentfulInspectorMode({ entryId:pageData?.sys?.id });

    const seoFields = pageData && pageData?.seoFields      

    return (
      <>
        <section className="item-details section">
        <div className="container">
            <div className="top-area">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="product-images">
                        <main id="gallery">
                        <div className="main-img" {...infosInsProps({fieldId: "image"})}>
                            <img
                            src={pageData?.image?.url}
                            id="current"
                            alt="#"
                            />
                        </div>
                        </main>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="product-info">
                        <h2 className="title" {...infosInsProps({fieldId: "title"})}>{pageData?.title}</h2>
                        <p className="category" {...infosInsProps({fieldId: "category"})}>
                        <i className="lni lni-tag" /> {pageData?.category}
                        <a href="javascript:void(0)">Action cameras</a>
                        </p>
                        <h3 className="price" {...infosInsProps({fieldId: "price"})}>
                            {pageData?.price}
                        </h3>
                        <p className="info-text" {...infosInsProps({fieldId: "description"})}>
                            {pageData?.description}
                        </p>
                        <div className="bottom-content">
                        <div className="row align-items-end">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="product-details-info">
            <div className="single-block">
                <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="info-body custom-responsive-margin" {...infosInsProps({fieldId: "leftPanel"})}>
                    <RichTextDocument {...pageData?.leftPanel}/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="info-body" {...infosInsProps({fieldId: "rightPanel"})}>
                    <RichTextDocument {...pageData?.rightPanel}/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </>
    )
}
