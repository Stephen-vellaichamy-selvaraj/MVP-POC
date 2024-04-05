import React from 'react'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import ShippingInfoSlide from './ShippingInfoSlide';

export default function ShippingInfo(props) {
    if (!props) return null
    const infosInsProps = useContentfulInspectorMode({ entryId:props?.sys?.id });
    
  return (
    <>
        {/* Start Shipping Info */}
        <section className="shipping-info">
            <div className="container" {...infosInsProps({fieldId:"infosCollection"})}>
                <ul>
                    {
                        props && props?.infosCollection?.items?.map((item) => (
                            <ShippingInfoSlide {...item}/>
                        ))
                    }
                </ul>
            </div>
        </section>
        {/* End Shipping Info */}
    </>
  )
}
