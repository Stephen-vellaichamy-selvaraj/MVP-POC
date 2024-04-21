import React from 'react'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export default function TopBar(props) {
    
    if(!props) return null;

    const HeaderDatasourceSysId = props?.HeaderDatasource[0]?.sys?.id
    const TopBarInsProps = useContentfulInspectorMode({ entryId: HeaderDatasourceSysId });
    const headerFields = props?.HeaderDatasource[0]?.fields
    console.log(headerFields?.headerMiddleNavigation)

  return (
    <>
        {/* Start Topbar */}
        <div className="topbar">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-4 col-12">
                <div className="top-left">
                    <ul className="menu-top-link">
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
                    <ul className="useful-links" {...TopBarInsProps({fieldId:"headerMiddleNavigation"})}>
                        {
                            headerFields && headerFields?.headerMiddleNavigation.map((item, index) => (
                                <li>
                                    <a href={`/${item?.fields?.slug}`}>{item?.fields?.internalName}</a>
                                </li>
                            ))
                        }
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
    </>
  )
}
