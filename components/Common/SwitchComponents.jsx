import React from 'react'
import Header from './Header';
import HeroArea from '../HeroArea';
import TrendingProductArea from '../TrendingProductArea';
import ShippingInfo from '../ShippingInfo';
import BannerArea from "../BannerArea";
import CallActionArea from "../CallActionArea";
import Footer from './Footer';

const SwitchComponents = {
    ComponentHeader : Header,
    ComponentHeroBanner : HeroArea,
    ComponentTrendingProductArea : TrendingProductArea,
    ComponentShippingInfo: ShippingInfo,
    ComponentBannerArea: BannerArea,
    ComponentCallActionArea: CallActionArea,
    ComponentFooter : Footer
};

export default SwitchComponents 
