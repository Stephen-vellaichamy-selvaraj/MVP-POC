import React from 'react'
import Search from '../Search'
import TopBar from './TopBar'
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'
import BreadCrumbs from './BreadCrumbs'  

export default function Header(props) {
  
  //console.log(`Head: ${JSON.stringify(props)}`)

  return (
    <>
          {/* Start Header Area */}
          <header className="header navbar-area">
            {/* Start Topbar */}
            <TopBar/>
            {/* End Topbar */}
            {/* Start Header Middle */}
            <HeaderMiddle/>
            {/* End Header Middle */}
            {/* Start Header Bottom */}
            <HeaderBottom {...props}/>
            {/* End Header Bottom */}
          </header>
          {/* End Header Area */}
          {/* Start Breadcrumbs */}
          <BreadCrumbs />
          {/* End Breadcrumbs */}


    </>
  )
}
