import React from 'react'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export default function TopicCta(props) {

    if(!props) return null;

    // console.log("Topic CTA")
    // console.log(props)

    const TopicCtaInsProps = useContentfulInspectorMode({ entryId: props?.sys?.id });

    if (props?.cta){
      return (
        <a {...TopicCtaInsProps({fieldId:"title"})}
            title={props && props?.description}
            href={props && props?.cta}
            className={props && props?.ctaButtonColour}
            style={{ marginBottom: "5%" }}
          >     
          
          {
            props && props?.ctaButtonText?(
              props && props?.ctaButtonText
            ):(
              props && props?.title
            )
          }

          <img {...TopicCtaInsProps({fieldId:"url"})}
                alt={props?.ctaButtonIcon?.title}
                src={props?.ctaButtonIcon?.url}
          />
          
          <span style={{ display: "none" }}>internalLink</span>

        </a>
      )
    }else
    {
      return <a {...TopicCtaInsProps({fieldId:"cta"})} />
    }
}
