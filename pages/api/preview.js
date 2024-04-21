import { COOKIE_NAME_PRERENDER_BYPASS } from 'next/dist/server/api-utils';
import ContentfulApi from "../../utils/ContentfulApi"
import { render } from 'react-dom';

function enableDraftMode(res) {
    res.setDraftMode({ enable: true })
  
    const headers = res.getHeader("Set-Cookie")
    if (Array.isArray(headers)) {
      res.setHeader(
        "Set-Cookie",
        headers.map(cookie => {
          if (cookie.includes(COOKIE_NAME_PRERENDER_BYPASS)) {
            return cookie.replace("SameSite=Lax", "SameSite=None; Secure")
          }
          return cookie
        })
      )
    }
}  

export default async (req, res) => {

  //console.log(req.query);
    
  const { slug, preview, secret, pagetype } = req.query; 

  let token = pagetype=='lp'? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.PIM_PREVIEW_ACCESS_TOKEN

  if (req.query.secret !== token || !req.query.slug || !req.query.pagetype) {
    return res.status(401).json({ message: 'Invalid token' })
  }

    if (slug){
        try{            
            //const page  = null;
            switch(pagetype) {
              case 'lp':
                const lpPage = await ContentfulApi.getLandingPageBySlug(slug, preview)
                if (!lpPage) {
                  return res.status(401).json({ message: 'Invalid slug' })
                }
                //res.setPreviewData({})
                enableDraftMode(res);               
                return res.redirect(`/${lpPage.items[0].slug}`)
              case 'pd':
                const pdp = await ContentfulApi.getDetailPage(slug, preview)
                if (!pdp) {
                  return res.status(401).json({ message: 'Invalid slug' })
                }
                //res.setPreviewData({})
                enableDraftMode(res);          
                return res.redirect(`/details/${pdp.items[0].slug}`)
              default:
                return res.end("Preview mode")
            }



        }
        catch{
            return res.status(401).json({ message: 'Invalid slug' });
        }
    }

}