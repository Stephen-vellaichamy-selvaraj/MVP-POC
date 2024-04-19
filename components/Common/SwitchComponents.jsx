import React from 'react'
import HeroArea from '../HeroArea';
import TrendingProductArea from '../TrendingProductArea';
import ShippingInfo from '../ShippingInfo';
import BannerArea from "../BannerArea";
import CallActionArea from "../CallActionArea";
import AlgoliaSearch from './Search/AlgoliaSearch';

const SwitchComponents = {
    ComponentHeroBanner : HeroArea,
    ComponentTrendingProductArea : TrendingProductArea,
    ComponentShippingInfo: ShippingInfo,
    ComponentBannerArea: BannerArea,
    ComponentCallActionArea: CallActionArea,
    ComponentSearch: AlgoliaSearch
};

export default SwitchComponents 
