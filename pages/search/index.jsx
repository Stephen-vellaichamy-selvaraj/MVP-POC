import algoliasearch from "algoliasearch/lite"
import { Pagination } from 'react-instantsearch';
import singletonRouter from "next/router"
import React from "react"
import { renderToString } from "react-dom/server"
import { createInstantSearchRouterNext } from "react-instantsearch-router-nextjs"
import { Panel } from "../../components/Common/Search/Panel"

import {
  DynamicWidgets,
  InstantSearch,
  Hits,
  Highlight,
  RefinementList,
  SearchBox,
  InstantSearchSSRProvider,
  getServerState,
} from "react-instantsearch"



const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
);

function Hit({ hit }) {
  return (
    <>
      <Highlight hit={hit} attribute="name" className="Hit-label" />
      {/* <div className="col-lg-4 col-md-6 col-12"> */}
          {/* Start Single Product */}
          <div className="single-product">
            <div className="product-image">
              <img src="/product-1.jpg" alt="#" />
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
          </div>
        {/* End Single Product */}
      {/* </div>           */}
    </>
  )
}

export default function Index({ serverState, url }) {
  return (
    <InstantSearchSSRProvider {...serverState}>
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
                    {/* <form action="#">
                      <input type="text" placeholder="Search Here..." />
                      <button type="submit">
                        <i className="lni lni-search-alt" />
                      </button>
                    </form> */}
                  </div>
                  {/* End Single Widget */}
                  {/* Start Single Widget */}
                  <div className="single-widget">
                    <h5>All Categories</h5>
                    <DynamicWidgets fallbackComponent={FallbackComponent} />

                    {/* <ul className="list">
                      <li>
                        <a href="product-grids.html">Computers &amp; Accessories </a>
                        <span>(1138)</span>
                      </li>
                      <li>
                        <a href="product-grids.html">Smartphones &amp; Tablets</a>
                        <span>(2356)</span>
                      </li>
                      <li>
                        <a href="product-grids.html">TV, Video &amp; Audio</a>
                        <span>(420)</span>
                      </li>
                      <li>
                        <a href="product-grids.html">Cameras, Photo &amp; Video</a>
                        <span>(874)</span>
                      </li>
                      <li>
                        <a href="product-grids.html">Headphones</a>
                        <span>(1239)</span>
                      </li>
                      <li>
                        <a href="product-grids.html">Wearable Electronics</a>
                        <span>(340)</span>
                      </li>
                      <li>
                        <a href="product-grids.html">Printers &amp; Ink</a>
                        <span>(512)</span>
                      </li>
                    </ul> */}
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
                  {/* Start Single Widget */}
                  {/* <div className="single-widget condition">
                    <h3>Filter by Price</h3>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault1"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault1">
                        $50 - $100L (208)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault2"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault2">
                        $100L - $500 (311)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault3"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault3">
                        $500 - $1,000 (485)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault4"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault4">
                        $1,000 - $5,000 (213)
                      </label>
                    </div>
                  </div> */}
                  {/* End Single Widget */}
                  {/* Start Single Widget */}
                  {/* <div className="single-widget condition">
                    <h3>Filter by Brand</h3>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault11"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault11">
                        Apple (254)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault22"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault22">
                        Bosh (39)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault33"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault33">
                        Canon Inc. (128)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault44"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault44">
                        Dell (310)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault55"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault55">
                        Hewlett-Packard (42)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault66"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault66">
                        Hitachi (217)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault77"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault77">
                        LG Electronics (310)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault88"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault88">
                        Panasonic (74)
                      </label>
                    </div>
                  </div> */}
                  {/* End Single Widget */}
                </div>
                {/* End Product Sidebar */}
              </div>
              <div className="col-lg-9 col-12">
                <div className="product-grids-head">
                  {/* <div className="product-grid-topbar">
                    <div className="row align-items-center">
                      <div className="col-lg-7 col-md-8 col-12">
                        <div className="product-sorting">
                          <label htmlFor="sorting">Sort by:</label>
                          <select className="form-control" id="sorting">
                            <option>Popularity</option>
                            <option>Low - High Price</option>
                            <option>High - Low Price</option>
                            <option>Average Rating</option>
                            <option>A - Z Order</option>
                            <option>Z - A Order</option>
                          </select>
                          <h3 className="total-show-product">
                            Showing: <span>1 - 12 items</span>
                          </h3>
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
                  </div> */}
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-grid"
                      role="tabpanel"
                      aria-labelledby="nav-grid-tab"
                    >
                      <div className="row">
                        <Hits hitComponent={Hit} />
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {/* Pagination */}
                          {/* <Pagination /> */}

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
                                    src="/product-1.jpg"
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
                        <div className="col-lg-12 col-md-12 col-12">
                          {/* Start Single Product */}
                          <div className="single-product">
                            <div className="row align-items-center">
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="product-image">
                                  <img
                                    src="/product-2.jpg"
                                    alt="#"
                                  />
                                  <span className="sale-tag">-25%</span>
                                  <div className="button">
                                    <a href="product-details.html" className="btn">
                                      <i className="lni lni-cart" /> Add to Cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-8 col-md-8 col-12">
                                <div className="product-info">
                                  <span className="category">Speaker</span>
                                  <h4 className="title">
                                    <a href="product-grids.html">
                                      Big Power Sound Speaker
                                    </a>
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
                                      <i className="lni lni-star-filled" />
                                    </li>
                                    <li>
                                      <span>5.0 Review(s)</span>
                                    </li>
                                  </ul>
                                  <div className="price">
                                    <span>$275.00</span>
                                    <span className="discount-price">$300.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Product */}
                        </div>
                        <div className="col-lg-12 col-md-12 col-12">
                          {/* Start Single Product */}
                          <div className="single-product">
                            <div className="row align-items-center">
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="product-image">
                                  <img
                                    src="/product-3.jpg"
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
                                  <span className="category">Camera</span>
                                  <h4 className="title">
                                    <a href="product-grids.html">
                                      WiFi Security Camera
                                    </a>
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
                                      <i className="lni lni-star-filled" />
                                    </li>
                                    <li>
                                      <span>5.0 Review(s)</span>
                                    </li>
                                  </ul>
                                  <div className="price">
                                    <span>$399.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Product */}
                        </div>
                        <div className="col-lg-12 col-md-12 col-12">
                          {/* Start Single Product */}
                          <div className="single-product">
                            <div className="row align-items-center">
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="product-image">
                                  <img
                                    src="/product-4.jpg"
                                    alt="#"
                                  />
                                  <span className="new-tag">New</span>
                                  <div className="button">
                                    <a href="product-details.html" className="btn">
                                      <i className="lni lni-cart" /> Add to Cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-8 col-md-8 col-12">
                                <div className="product-info">
                                  <span className="category">Phones</span>
                                  <h4 className="title">
                                    <a href="product-grids.html">iphone 6x plus</a>
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
                                      <i className="lni lni-star-filled" />
                                    </li>
                                    <li>
                                      <span>5.0 Review(s)</span>
                                    </li>
                                  </ul>
                                  <div className="price">
                                    <span>$400.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Single Product */}
                        </div>
                        <div className="col-lg-12 col-md-12 col-12">
                          {/* Start Single Product */}
                          <div className="single-product">
                            <div className="row align-items-center">
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="product-image">
                                  <img
                                    src="/product-7.jpg"
                                    alt="#"
                                  />
                                  <span className="sale-tag">-50%</span>
                                  <div className="button">
                                    <a href="product-details.html" className="btn">
                                      <i className="lni lni-cart" /> Add to Cart
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-8 col-md-8 col-12">
                                <div className="product-info">
                                  <span className="category">Headphones</span>
                                  <h4 className="title">
                                    <a href="product-grids.html">
                                      PX7 Wireless Headphones
                                    </a>
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
                                    <span>$100.00</span>
                                    <span className="discount-price">$200.00</span>
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
        <Pagination />
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