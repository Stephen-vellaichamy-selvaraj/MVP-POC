import React from 'react'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export default function HeroAreaSlider(props) {

    if (!props) return null

    const HeroAreaInsProps = useContentfulInspectorMode({ entryId: props?.sys?.id });

    return (
        <>
            <div className="single-slider" 
            {...HeroAreaInsProps({ fieldId: "image"})}
            style={{backgroundImage: `url(${props && props?.image?.url})`}} 
            key= {Math.random()}>
                
                <div className="content">
                    <h2 {...HeroAreaInsProps({ fieldId: "subTitle"})}>
                        <span {...HeroAreaInsProps({ fieldId: "title"})}>{props && props?.title}</span>
                        {props && props?.subTitle}
                    </h2>
                    <p {...HeroAreaInsProps({ fieldId: "description"})}>
                        {props && props?.description}
                    </p>
                    <h3>
                    <span>Now Only</span> $320.99
                    </h3>
                    <div className="button">
                    <a href="product-grids.html" className="btn">
                        Shop Now
                    </a>
                    </div>
                </div>
            </div>    
        </>
    )
}
