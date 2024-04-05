import React from 'react'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import BannerAreaSlide from './BannerAreaSlide';

export default function BannerArea(props) {
    if (!props) return null

    const BannerAreaInsProps = useContentfulInspectorMode({ entryId: props?.sys?.id });

  return (
    <>
        {/* Start Banner Area */}
        <section className="banner section" {...BannerAreaInsProps({fieldId:"items"})}>
            <div className="container">
                <div className="row">
                    {
                        props?.bannersCollection?.items.map((item, index) => (
                            <BannerAreaSlide {...item}/>
                        ))
                    }
                </div>
            </div>
        </section>
        {/* End Banner Area */}
    </>
  )
}
