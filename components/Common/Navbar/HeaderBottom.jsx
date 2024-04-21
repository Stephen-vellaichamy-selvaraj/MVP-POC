import React from 'react'
import MegaCategoryMenu from './MegaCategoryMenu'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export default function HeaderBottom(props) {
  if(!props) return null;
  const HeaderDatasourceSysId = props?.HeaderDatasource[0]?.sys?.id
  const HeaderBottomInsProps = useContentfulInspectorMode({ entryId: HeaderDatasourceSysId });
  const headerFields = props?.HeaderDatasource[0]?.fields
  //console.log(headerFields?.socialMediaLinks)

  return (
    <>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-6 col-12">
              <div className="nav-inner">
                {/* Start Mega Category Menu */}
                <MegaCategoryMenu {...props}/>
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

                  </div>{" "}
                  {/* navbar collapse */}
                </nav>
                {/* End Navbar */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Nav Social */}
              <div className="nav-social">
                <h5 className="title" {...HeaderBottomInsProps({fieldId:"socialMediaSectionTitle"})}>{headerFields?.socialMediaSectionTitle}</h5>
                <ul>
                  {
                    headerFields && headerFields?.socialMediaLinks?.map((item, index) => (
                      <li><a href={item?.fields?.socialMediaReference} 
                      // {...useContentfulInspectorMode({ entryId: item?.sys?.id })({ fieldId: 'socialMediaReference' })}
                      ><i className={`lni ${item?.fields?.linkStyle}`} /></a></li>
                    ))
                  }
                </ul>
              </div>
              {/* End Nav Social */}
            </div>
          </div>
        </div>    
    </>
  )
}
