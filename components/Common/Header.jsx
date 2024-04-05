import React from 'react'
import Search from './Search'

export default function Header() {
  return (
    <>
          {/* Start Header Area */}
          <header className="header navbar-area">
            {/* Start Topbar */}
            <div className="topbar">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="top-left">
                      <ul className="menu-top-link">
                        <li>
                          <div className="select-position">
                            <select id="select4">
                              <option value={0} defaultValue="">
                                $ USD
                              </option>
                              <option value={1}>€ EURO</option>
                              <option value={2}>$ CAD</option>
                              <option value={3}>₹ INR</option>
                              <option value={4}>¥ CNY</option>
                              <option value={5}>৳ BDT</option>
                            </select>
                          </div>
                        </li>
                        <li>
                          <div className="select-position">
                            <select id="select5">
                              <option value={0} defaultValue="">
                                English
                              </option>
                              <option value={1}>Español</option>
                              <option value={2}>Filipino</option>
                              <option value={3}>Français</option>
                              <option value={4}>العربية</option>
                              <option value={5}>हिन्दी</option>
                              <option value={6}>বাংলা</option>
                            </select>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="top-middle">
                      <ul className="useful-links">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="top-end">
                      <div className="user">
                        <i className="lni lni-user" />
                        Hello
                      </div>
                      <ul className="user-login">
                        <li>
                          <a href="login.html">Sign In</a>
                        </li>
                        <li>
                          <a href="register.html">Register</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Topbar */}
            {/* Start Header Middle */}
            <div className="header-middle">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-3 col-7">
                    {/* Start Header Logo */}
                    <a className="navbar-brand" href="index.html">
                      <img src="/logo.svg" alt="Logo" />
                    </a>
                    {/* End Header Logo */}
                  </div>
                  <div className="col-lg-5 col-md-7 d-xs-none">
                    {/* <Search /> */}
                  </div>
                  <div className="col-lg-4 col-md-2 col-5">
                    <div className="middle-right-area">
                      <div className="nav-hotline">
                        <i className="lni lni-phone" />
                        <h3>
                          Hotline:
                          <span>(+100) 123 456 7890</span>
                        </h3>
                      </div>
                      <div className="navbar-cart">
                        <div className="wishlist">
                          <a href="#">
                            <i className="lni lni-heart" />
                            <span className="total-items">0</span>
                          </a>
                        </div>
                        <div className="cart-items">
                          <a href="#" className="main-btn">
                            <i className="lni lni-cart" />
                            <span className="total-items">2</span>
                          </a>
                          {/* Shopping Item */}
                          <div className="shopping-item">
                            <div className="dropdown-cart-header">
                              <span>2 Items</span>
                              <a href="cart.html">View Cart</a>
                            </div>
                            <ul className="shopping-list">
                              <li>
                                <a
                                  href="#"
                                  className="remove"
                                  title="Remove this item"
                                >
                                  <i className="lni lni-close" />
                                </a>
                                <div className="cart-img-head">
                                  <a className="cart-img" href="product-details.html">
                                    <img
                                      src="/images/header/cart-items/item1.jpg"
                                      alt="#"
                                    />
                                  </a>
                                </div>
                                <div className="content">
                                  <h4>
                                    <a href="product-details.html">
                                      Apple Watch Series 6
                                    </a>
                                  </h4>
                                  <p className="quantity">
                                    1x - <span className="amount">$99.00</span>
                                  </p>
                                </div>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="remove"
                                  title="Remove this item"
                                >
                                  <i className="lni lni-close" />
                                </a>
                                <div className="cart-img-head">
                                  <a className="cart-img" href="product-details.html">
                                    <img
                                      src="/images/header/cart-items/item2.jpg"
                                      alt="#"
                                    />
                                  </a>
                                </div>
                                <div className="content">
                                  <h4>
                                    <a href="product-details.html">
                                      Wi-Fi Smart Camera
                                    </a>
                                  </h4>
                                  <p className="quantity">
                                    1x - <span className="amount">$35.00</span>
                                  </p>
                                </div>
                              </li>
                            </ul>
                            <div className="bottom">
                              <div className="total">
                                <span>Total</span>
                                <span className="total-amount">$134.00</span>
                              </div>
                              <div className="button">
                                <a href="checkout.html" className="btn animate">
                                  Checkout
                                </a>
                              </div>
                            </div>
                          </div>
                          {/*/ End Shopping Item */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Header Middle */}
            {/* Start Header Bottom */}
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-6 col-12">
                  <div className="nav-inner">
                    {/* Start Mega Category Menu */}
                    <div className="mega-category-menu">
                      <span className="cat-button">
                        <i className="lni lni-menu" />
                        All Categories
                      </span>
                      <ul className="sub-category">
                        <li>
                          <a href="product-grids.html">
                            Electronics <i className="lni lni-chevron-right" />
                          </a>
                          <ul className="inner-sub-category">
                            <li>
                              <a href="product-grids.html">Digital Cameras</a>
                            </li>
                            <li>
                              <a href="product-grids.html">Camcorders</a>
                            </li>
                            <li>
                              <a href="product-grids.html">Camera Drones</a>
                            </li>
                            <li>
                              <a href="product-grids.html">Smart Watches</a>
                            </li>
                            <li>
                              <a href="product-grids.html">Headphones</a>
                            </li>
                            <li>
                              <a href="product-grids.html">MP3 Players</a>
                            </li>
                            <li>
                              <a href="product-grids.html">Microphones</a>
                            </li>
                            <li>
                              <a href="product-grids.html">Chargers</a>
                            </li>
                            <li>
                              <a href="product-grids.html">Batteries</a>
                            </li>
                            <li>
                              <a href="product-grids.html">Cables &amp; Adapters</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="product-grids.html">accessories</a>
                        </li>
                        <li>
                          <a href="product-grids.html">Televisions</a>
                        </li>
                        <li>
                          <a href="product-grids.html">best selling</a>
                        </li>
                        <li>
                          <a href="product-grids.html">top 100 offer</a>
                        </li>
                        <li>
                          <a href="product-grids.html">sunglass</a>
                        </li>
                        <li>
                          <a href="product-grids.html">watch</a>
                        </li>
                        <li>
                          <a href="product-grids.html">man’s product</a>
                        </li>
                        <li>
                          <a href="product-grids.html">Home Audio &amp; Theater</a>
                        </li>
                        <li>
                          <a href="product-grids.html">Computers &amp; Tablets </a>
                        </li>
                        <li>
                          <a href="product-grids.html">Video Games </a>
                        </li>
                        <li>
                          <a href="product-grids.html">Home Appliances </a>
                        </li>
                      </ul>
                    </div>
                    {/* End Mega Category Menu */}
                    {/* Start Navbar */}
                    <nav className="navbar navbar-expand-lg">
                      <button
                        className="navbar-toggler mobile-menu-btn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="toggler-icon" />
                        <span className="toggler-icon" />
                        <span className="toggler-icon" />
                      </button>
                      <div
                        className="collapse navbar-collapse sub-menu-bar"
                        id="navbarSupportedContent"
                      >
                        <ul id="nav" className="navbar-nav ms-auto">
                          <li className="nav-item">
                            <a
                              href="index.html"
                              className="active"
                              aria-label="Toggle navigation"
                            >
                              Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dd-menu collapsed"
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target="#submenu-1-2"
                              aria-controls="navbarSupportedContent"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                            >
                              Pages
                            </a>
                            <ul className="sub-menu collapse" id="submenu-1-2">
                              <li className="nav-item">
                                <a href="about-us.html">About Us</a>
                              </li>
                              <li className="nav-item">
                                <a href="faq.html">Faq</a>
                              </li>
                              <li className="nav-item">
                                <a href="login.html">Login</a>
                              </li>
                              <li className="nav-item">
                                <a href="register.html">Register</a>
                              </li>
                              <li className="nav-item">
                                <a href="mail-success.html">Mail Success</a>
                              </li>
                              <li className="nav-item">
                                <a href="404.html">404 Error</a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dd-menu collapsed"
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target="#submenu-1-3"
                              aria-controls="navbarSupportedContent"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                            >
                              Shop
                            </a>
                            <ul className="sub-menu collapse" id="submenu-1-3">
                              <li className="nav-item">
                                <a href="product-grids.html">Shop Grid</a>
                              </li>
                              <li className="nav-item">
                                <a href="product-list.html">Shop List</a>
                              </li>
                              <li className="nav-item">
                                <a href="product-details.html">shop Single</a>
                              </li>
                              <li className="nav-item">
                                <a href="cart.html">Cart</a>
                              </li>
                              <li className="nav-item">
                                <a href="checkout.html">Checkout</a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a
                              className="dd-menu collapsed"
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target="#submenu-1-4"
                              aria-controls="navbarSupportedContent"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                            >
                              Blog
                            </a>
                            <ul className="sub-menu collapse" id="submenu-1-4">
                              <li className="nav-item">
                                <a href="blog-grid-sidebar.html">Blog Grid Sidebar</a>
                              </li>
                              <li className="nav-item">
                                <a href="blog-single.html">Blog Single</a>
                              </li>
                              <li className="nav-item">
                                <a href="blog-single-sidebar.html">
                                  Blog Single Sibebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a href="contact.html" aria-label="Toggle navigation">
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>{" "}
                      {/* navbar collapse */}
                    </nav>
                    {/* End Navbar */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Start Nav Social */}
                  <div className="nav-social">
                    <h5 className="title">Follow Us:</h5>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="lni lni-facebook-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni lni-twitter-original" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni lni-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni lni-skype" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End Nav Social */}
                </div>
              </div>
            </div>
            {/* End Header Bottom */}
          </header>
          {/* End Header Area */}    
    </>
  )
}
