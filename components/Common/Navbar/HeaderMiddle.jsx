
import SearchForm from "./SearchForm"
import { usePathname } from 'next/navigation'

export default function HeaderMiddle(props) {

  const pathname = usePathname()  
  const show = (pathname=="/search") ? 'hidden=false':'hidden=true' 
  console.log(`First url: ${pathname}, hidden: ${show}`); // '/blog/xyz'

  return (
    <>
      <div className="header-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 col-7">
              {/* Start Header Logo */}
              <a className="navbar-brand" href="./">
                <img src="/logo.svg" alt="Logo" />
              </a>
              {/* End Header Logo */}
            </div>
            <div className="col-lg-5 col-md-7 d-xs-none">
            {/* Start Main Menu Search */}
            <div className="main-menu-search">
                { 
                  pathname!="/search" ? <SearchForm/>:""
                }
            </div>
            {/* End Main Menu Search */}
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
    </>
  )
}
