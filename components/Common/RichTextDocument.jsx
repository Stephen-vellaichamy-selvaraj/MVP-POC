import React from 'react';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import TopicCta from './TopicCta';

function renderOptions(links) {
  //console.log("Links")
  //console.log(links)  
  
  const entryMap = new Map();

  if (links?.entries?.inline?.length >0){
    for (const entry of links?.entries?.inline) {
      entryMap.set(entry?.sys?.id, entry);
    }
  }

  return {
    // other options...
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
    renderNode: {
      //[BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      // [BLOCKS.UL_LIST]: (node, children) => {return(<ul>{children}</ul>)},
      // [BLOCKS.OL_LIST]: (node, children) => {return(<ol>{children}</ol>)},
      //[BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,

      [BLOCKS.LIST_ITEM]: (node, children) => {
        const UnTaggedChildren = documentToReactComponents(node, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => children,
            [BLOCKS.LIST_ITEM]: (node, children) => children,
          },
        })

        return (
          <li>
            {UnTaggedChildren}
          </li>
        )
      },      
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node?.data?.target?.sys?.id);

        if (entry?.__typename === "TopicCta") {
          return <TopicCta {...entry}/>;
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryBlockMap.get(node?.data?.target?.sys?.id);

        // render the entries as needed by looking at the __typename 
        // referenced in the GraphQL query
        if (entry.__typename === "CodeBlock") {
          return (
            <pre>
              <code>{entry.code}</code>
            </pre>
          );
        }

       if (entry.__typename === "VideoEmbed") {
         return (
            <iframe
              src={entry.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={entry.title}
              allowFullScreen={true}
            />
          );
        }

      },
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node?.data?.target?.sys?.id);

        // render the asset accordingly
        return (
          <img src={asset.url} alt="My image alt text" />
        );
      },
    },
  };
}

export default function RichTextDocument(richtextContent) {

    if (!richtextContent) return null
  return (
    documentToReactComponents(richtextContent?.json, renderOptions(richtextContent?.links))
  )
}

