import React from 'react'
import HeroArea from '../HeroArea';
import TrendingProductArea from '../TrendingProductArea';
import ShippingInfo from '../ShippingInfo';
import BannerArea from "../BannerArea";
import CallActionArea from "../CallActionArea";
import AlgoliaSearch from './Search/AlgoliaSearch';
import GeneralDescription from '../GeneralDescription';

const SwitchComponents = {
    ComponentHeroBanner : HeroArea,
    ComponentTrendingProductArea : TrendingProductArea,
    ComponentShippingInfo: ShippingInfo,
    ComponentBannerArea: BannerArea,
    ComponentCallActionArea: CallActionArea,
    ComponentSearch: AlgoliaSearch,
    ComponentRichText: GeneralDescription
};

export default SwitchComponents 
