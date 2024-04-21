import React from 'react'
import { NextSeo } from 'next-seo';

export default function NextSeoCommon(seoFields) {
  
  if (!seoFields) return null;

  //console.log("SEO Fields")
  //console.log(seoFields)

  return (
    <NextSeo
      title={seoFields && seoFields?.pageTitle}
      description = {seoFields && seoFields?.pageDescription}
      additionalMetaTags={[{
        property: 'og:image',
        content: seoFields && seoFields?.shareImagesCollection?.items[0]?.url
      }]}
    />
  )
}