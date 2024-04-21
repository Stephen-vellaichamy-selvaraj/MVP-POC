import React from 'react'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export default function HeroAreaBanner(props, index) {

    if (!props) return null

    const HeroAreaBannerInsProps = useContentfulInspectorMode({ entryId: props?.sys?.id });

  return (
    <>
        {/* Start Small Banner */}
        <div
        {...HeroAreaBannerInsProps({ fieldId: "image"})}
        className={`hero-small-banner ${props?.style}`}
        style={{backgroundImage: `url(${props && props?.image?.url})`}}>        
        <div className="content">
            <h2 {...HeroAreaBannerInsProps({ fieldId: "subTitle"})}>
                <span {...HeroAreaBannerInsProps({ fieldId: "title"})}>{props && props?.title}</span>
                {props && props?.subTitle}
            </h2>
            <h3>$259.99</h3>
        </div>
        </div>
        {/* End Small Banner */}   
    </>
  )
}
