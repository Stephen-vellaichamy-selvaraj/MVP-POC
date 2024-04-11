import React from 'react'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export default function TopicCta(props) {

    if(!props) return null;

    const TopicCtaInsProps = useContentfulInspectorMode({ entryId: props?.sys?.id });

    if (props){
      return (
        <div className="button" {...TopicCtaInsProps({fieldId:"callToAction"})}>
          <a href={props?.callToAction} className="btn">
          {props?.buttonText}
          </a>
        </div>
      )
    }else
    {
      return <a {...TopicCtaInsProps({fieldId:"cta"})} />
    }
}
