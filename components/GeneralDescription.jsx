import React from 'react'
import RichTextDocument from './Common/RichTextDocument'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export default function GeneralDescription(props) {
    
    if (!props) return null

    //console.log(`Richtext: ${JSON.stringify(props?.content?.json)}`)

    const richTextInsProps = useContentfulInspectorMode({ entryId: props?.sys?.id });

  return (
    <>
        <div className="container">
            <div className="product-details-info">
                <div className="single-block">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div
                                className="info-body custom-responsive-margin"
                                data-contentful-field-id="leftPanel"
                                data-contentful-entry-id="7L66hjayX9TrWnUbT8keTV"
                                {...richTextInsProps({ fieldId: "content"})}
                            >
                                <RichTextDocument {...props?.content}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>   
  )
}
