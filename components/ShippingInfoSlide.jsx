import React from 'react'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export default function ShippingInfoSlide(item) {
    if (!item) return null;
    const infosInsChildProps = useContentfulInspectorMode({ entryId:item?.sys?.id });
  return (
    <li key= {Math.random()}>
    <div className="media-icon">
        <i className={`lni lni-${item?.theme}`} />
    </div>
    <div className="media-body">
        <h5 {...infosInsChildProps({fieldId:"title"})}>{item?.title}</h5>
        <span {...infosInsChildProps({fieldId:"description"})}>{item?.description}</span>
    </div>
</li>
  )
}
