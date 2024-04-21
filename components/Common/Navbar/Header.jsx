import React from 'react'
import Search from '../Search'
import TopBar from './TopBar'
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'
import BreadCrumbs from './BreadCrumbs'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export default function Header(props) {
  
  if(!props) return null;

  return (
    <>
        {/* Start Header Area */}
        <header className="header navbar-area">
          {/* Start Topbar */}
          <TopBar {...props}/>
          {/* End Topbar */}
          {/* Start Header Middle */}
          <HeaderMiddle {...props}/>
          {/* End Header Middle */}
          {/* Start Header Bottom */}
          <HeaderBottom {...props}/>
          {/* End Header Bottom */}
        </header>
        {/* End Header Area */}
        {/* Start Breadcrumbs */}
        <BreadCrumbs {...props}/>
        {/* End Breadcrumbs */}
    </>
  )
}
