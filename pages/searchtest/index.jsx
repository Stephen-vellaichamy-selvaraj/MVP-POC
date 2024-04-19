import algoliasearch from "algoliasearch/lite"
import { Pagination } from 'react-instantsearch';
import singletonRouter from "next/router"
import React from "react"
import { renderToString } from "react-dom/server"
import { createInstantSearchRouterNext } from "react-instantsearch-router-nextjs"
import { Panel } from "../../components/Common/Search/Panel"
import Image from 'next/image'
import Footer from "../../components/Common/Footer";

import {
  DynamicWidgets,
  InstantSearch,
  Hits,
  Highlight,
  RefinementList,
  SearchBox,
  InstantSearchSSRProvider,
  getServerState,
  SortBy
} from "react-instantsearch"

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
);

function Hit({ hit }) {
  return (
    <>
      <Highlight hit={hit} attribute="name" className="Hit-label" />
      {/* <div className="col-lg-4 col-md-6 col-12">
        <div className="single-product"> */}
          <div className="product-image">
            <Image 
            src={hit?.cloudinaryImage?.[0].url} 
            alt={hit?.cloudinaryImage?.[0].url} 
            width="200" 
            height="180" />

            <div className="button">
              <a href="product-details.html" className="btn">
                <i className="lni lni-cart" /> Add to Cart
              </a>
            </div>
          </div>
          <div className="product-info">
            <span className="category">{hit.category && hit.category}</span>
            <h4 className="title">
              <a href={`/details/${hit.slug && hit.slug}`}>{hit.title && hit.title}</a>
            </h4>
            <div className="price">
              <span>£{hit.price && hit.price}</span>
            </div>
          </div>
        {/* </div>
      </div> */}
    </>
  )
}

export default function Index({ serverState, url}) {
  
  return (
    <InstantSearchSSRProvider {...serverState}>
      {/* <Header {...{categories}}/> */}
      <InstantSearch
        searchClient={client} indexName={process.env.NEXT_PUBLIC_ALGOLIA_PRODUCT_INDICES}
        routing={{
          router: createInstantSearchRouterNext({
            serverUrl: url,
            singletonRouter,
            routerOptions: {
              cleanUrlOnDispose: false
            }
          })
        }}        
        insights={true}>
        <section className="product-grids section">
            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-12">
                    {/* Start Product Sidebar */}
                    <div className="product-sidebar">
                        {/* Start Single Widget */}
                        <div className="single-widget search">
                        <h3>Search Product</h3>
                        <SearchBox />
                        </div>
                        {/* End Single Widget */}
                        {/* Start Single Widget */}
                        <div className="single-widget">
                        <h3>All Categories</h3>
                          <DynamicWidgets fallbackComponent={FallbackComponent}>
                            {/* <RefinementList attribute="price" />                           */}
                          </DynamicWidgets>
                          
                     
                        </div>
                        {/* End Single Widget */}
                        {/* Start Single Widget */}
                        {/* <div className="single-widget range">
                        <h3>Price Range</h3>
                        <input
                            type="range"
                            className="form-range"
                            name="range"
                            step={1}
                            min={100}
                            max={10000}
                            defaultValue={10}
                            onchange="rangePrimary.value=value"
                        />
                        <div className="range-inner">
                            <label>$</label>
                            <input type="text" id="rangePrimary" placeholder={100} />
                        </div>
                        </div> */}
                        {/* End Single Widget */}
                    </div>
                    {/* End Product Sidebar */}
                </div>
                <div className="col-lg-9 col-12">
                    <div className="product-grids-head">
                        <div className="product-grid-topbar">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-8 col-12">
                                  {/* <RefinementList/> */}
                                    <div className="product-sorting">
                                        <label htmlFor="sorting">Sort by:</label>
                                        <SortBy 
                                          items={[
                                            { label: 'Featured', value: 'mvp_products' },
                                            { label: 'Price (asc)', value: 'mvp_products_price_asc' },
                                            { label: 'Price (desc)', value: 'mvp_products_price_desc' },
                                          ]}
                                        />


                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-4 col-12">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button
                                        className="nav-link active"
                                        id="nav-grid-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-grid"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-grid"
                                        aria-selected="true"
                                    >
                                        <i className="lni lni-grid-alt" />
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-list-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-list"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-list"
                                        aria-selected="false"
                                    >
                                        <i className="lni lni-list" />
                                    </button>
                                    </div>
                                </nav>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab"                  >
                                <div className="row">
                                    {/* <div className="col-lg-4 col-md-6 col-12">
                                        <div className="single-product">
                                            <div className="product-image">
                                                <img
                                                src="assets/images/products/product-1.jpg"
                                                alt="#"
                                                />
                                                <div className="button">
                                                <a href="product-details.html" className="btn">
                                                    <i className="lni lni-cart" /> Add to Cart
                                                </a>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <span className="category">Watches</span>
                                                <h4 className="title">
                                                <a href="product-grids.html">Xiaomi Mi Band 5</a>
                                                </h4>

                                                <div className="price">
                                                <span>$199.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <Hits hitComponent={Hit} />
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        {/* Pagination */}
                                        <div className="pagination left">
                                        <Pagination />
                                        </div>
                                        {/*/ End Pagination */}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="nav-list"
                                role="tabpanel"
                                aria-labelledby="nav-list-tab"
                            >
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12">
                                        {/* Start Single Product */}
                                        <div className="single-product">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-md-4 col-12">
                                            <div className="product-image">
                                                <img
                                                src="assets/images/products/product-1.jpg"
                                                alt="#"
                                                />
                                                <div className="button">
                                                <a href="product-details.html" className="btn">
                                                    <i className="lni lni-cart" /> Add to Cart
                                                </a>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-12">
                                            <div className="product-info">
                                                <span className="category">Watches</span>
                                                <h4 className="title">
                                                <a href="product-grids.html">Xiaomi Mi Band 5</a>
                                                </h4>
                                                <ul className="review">
                                                <li>
                                                    <i className="lni lni-star-filled" />
                                                </li>
                                                <li>
                                                    <i className="lni lni-star-filled" />
                                                </li>
                                                <li>
                                                    <i className="lni lni-star-filled" />
                                                </li>
                                                <li>
                                                    <i className="lni lni-star-filled" />
                                                </li>
                                                <li>
                                                    <i className="lni lni-star" />
                                                </li>
                                                <li>
                                                    <span>4.0 Review(s)</span>
                                                </li>
                                                </ul>
                                                <div className="price">
                                                <span>$199.00</span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        {/* End Single Product */}
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-12">
                                    {/* Pagination */}
                                    <div className="pagination left">
                                    <ul className="pagination-list">
                                        <li>
                                        <a href="javascript:void(0)">1</a>
                                        </li>
                                        <li className="active">
                                        <a href="javascript:void(0)">2</a>
                                        </li>
                                        <li>
                                        <a href="javascript:void(0)">3</a>
                                        </li>
                                        <li>
                                        <a href="javascript:void(0)">4</a>
                                        </li>
                                        <li>
                                        <a href="javascript:void(0)">
                                            <i className="lni lni-chevron-right" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                    {/*/ End Pagination */}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>      
      </InstantSearch>
      <Footer/>
    </InstantSearchSSRProvider>    
  )
}

function FallbackComponent({ attribute }) {
  return (
    <Panel header={attribute} className="single-widget range">
      <RefinementList attribute={attribute} />
    </Panel>
  )
}

export const getServerSideProps = async function getServerSideProps({ req }) {
  const protocol = req.headers.referer?.split("://")[0] || "https"
  const url = `${protocol}://${req.headers.host}${req.url}`
  const serverState = await getServerState(<Index url={url} />, {
    renderToString
  })

  return {
    props: {
      serverState,
      url
    }
  }
}