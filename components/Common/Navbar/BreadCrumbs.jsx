import React from 'react'
import { usePathname } from 'next/navigation'
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export default function BreadCrumbs(props) {
    
    const pathname = usePathname()
    
    if(!props) return null;
    const HeaderDatasourceSysId = props?.HeaderDatasource[0]?.sys?.id
    const BreadCrumbsInsProps = useContentfulInspectorMode({ entryId: HeaderDatasourceSysId });
    const headerFields = props?.HeaderDatasource[0]?.fields
    console.log(headerFields?.headerBottomMiddle)

    var addresses = pathname?.split('/').map(function (address, index) {
        //console.log(index)
        if (index!=0)
        return <li key={index}><a href="javascript:void(0)">{ address }</a></li>; 
    });

  return (
    <div className="breadcrumbs">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content">
                <h1 className="page-title" {...BreadCrumbsInsProps({fieldId:"headerBottomMiddle"})}>{headerFields?.headerBottomMiddle}</h1>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <ul className="breadcrumb-nav">
                    <li><a href="./"><i class="lni lni-home"></i> Home</a></li>
                    {addresses && addresses}
                </ul>
            </div>
            </div>
        </div>
    </div>

  )
}

{/* <li>
<a href="index.html">
<i className="lni lni-home" /> Home
</a>
</li>
<li>
<a href="javascript:void(0)">Shop</a>
</li>
<li>Shop Grid</li> */}