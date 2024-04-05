import algoliasearch from "algoliasearch/lite"
import Head from "next/head"
import singletonRouter from "next/router"
import React from "react"
import { renderToString } from "react-dom/server"
import {
  DynamicWidgets,
  InstantSearch,
  Hits,
  Highlight,
  RefinementList,
  SearchBox,
  InstantSearchSSRProvider,
  getServerState
} from "react-instantsearch"
import { createInstantSearchRouterNext } from "react-instantsearch-router-nextjs"
import { Panel } from "../../components/Common/Search/Panel"

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
);

function Hit({ hit }) {
  return (
    <>
      <Highlight hit={hit} attribute="name" className="Hit-label" />
      <span className="Hit-price">${hit.title}</span>
    </>
  )
}

export default function HomePage({ serverState, url }) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <Head>
        <title>React InstantSearch - Next.js</title>
      </Head>

      <InstantSearch
        searchClient={client}
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_PRODUCT_INDICES}
        routing={{
          router: createInstantSearchRouterNext({
            serverUrl: url,
            singletonRouter,
            routerOptions: {
              cleanUrlOnDispose: false
            }
          })
        }}
        insights={true}
      >
        <div className="Container">
          <div>
            <DynamicWidgets fallbackComponent={FallbackComponent} />
          </div>
          <div>
            <SearchBox />
            <Hits hitComponent={Hit} />
          </div>
        </div>
      </InstantSearch>
    </InstantSearchSSRProvider>
  )
}

function FallbackComponent({ attribute }) {
  return (
    <Panel header={attribute}>
      <RefinementList attribute={attribute} />
    </Panel>
  )
}

export const getServerSideProps = async function getServerSideProps({ req }) {
  const protocol = req.headers.referer?.split("://")[0] || "https"
  const url = `${protocol}://${req.headers.host}${req.url}`
  const serverState = await getServerState(<HomePage url={url} />, {
    renderToString
  })

  return {
    props: {
      serverState,
      url
    }
  }
}