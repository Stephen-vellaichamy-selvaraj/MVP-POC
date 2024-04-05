import React from 'react'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export default function CallActionArea(props) {
    if (!props) return null
    const CallActionAreaInsProps = useContentfulInspectorMode({ entryId: props?.callActionSection?.sys?.id });

  return (
    <>
        {/* Start Call Action Area */}
        <section className="call-action section">
            <div className="container">
            <div className="row ">
                <div className="col-lg-8 offset-lg-2 col-12">
                <div className="inner">
                    <div className="content">
                    <h2 className="wow fadeInUp" data-wow-delay=".4s" {...CallActionAreaInsProps({ fieldId: "title"})}>
                        {props && props?.callActionSection?.title}
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".6s" {...CallActionAreaInsProps({ fieldId: "description"})}>
                        {props && props?.callActionSection?.description}
                    </p>
                    <div className="button wow fadeInUp" data-wow-delay=".8s">
                        <a href={props && props?.callActionSection?.callToAction} className="btn" {...CallActionAreaInsProps({ fieldId: "callToAction"})}>
                        Purchase Now
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* End Call Action Area */}
    </>
  )
}
