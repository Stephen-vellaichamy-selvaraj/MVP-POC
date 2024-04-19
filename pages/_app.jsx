//Preview related
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import "@contentful/live-preview/style.css";
import "/assets/css/bootstrap.min.css";
import "/assets/css/LineIcons.3.0.css";
import "/assets/css/tiny-slider.css";
import "/assets/css/glightbox.min.css";
import "/assets/css/main.css";
import Layout from '../components/Common/Layout';

function TmnasApp({ Component, pageProps }) {
  return (
    <ContentfulLivePreviewProvider
      enableInspectorMode={pageProps.previewActive}
      enableLiveUpdates={pageProps.previewActive}
      locale={'en-US'}>
      <>
        <Layout>          
            <Component {...pageProps} />
        </Layout>
      </>
    </ContentfulLivePreviewProvider>
  )
}

export default TmnasApp
