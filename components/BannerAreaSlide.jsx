import React from 'react'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import TopicCta from './Common/TopicCta';

export default function BannerAreaSlide(item) {
    if (!item) return null

    const BannerAreaSlideInsProps = useContentfulInspectorMode({ entryId: item?.sys?.id });

  return (
    <div className="col-lg-6 col-md-6 col-12">
        <div {...BannerAreaSlideInsProps({fieldId:"image"})}
          className="single-banner" style={{backgroundImage: `url(${item && item?.image?.url})`}}>
        <div className="content">
            <h2 {...BannerAreaSlideInsProps({fieldId:"title"})}>{item?.title}</h2>
            <p {...BannerAreaSlideInsProps({fieldId:"description"})}>{item?.description}</p>
            <TopicCta {... item?.cta} />
        </div>
        </div>
    </div>
  )
}
