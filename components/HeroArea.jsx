"use client"; // This is a client component 👈🏽
import React from 'react'
import { useEffect, useRef } from "react";
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import HeroAreaSlider from './HeroAreaSlider';
import HeroAreaBanner from './HeroAreaBanner';

export default function HeroArea(props) {

  if (!props) return null
  
    const HeroAreaInsProps = useContentfulInspectorMode({ entryId: props?.sys?.id });

    const sliders = props && props?.slidersCollection?.items;
    const banners = props && props?.smallBannersCollection?.items;
    //console.log(`Heor Area: ${sliders}`)

    // const ref = useRef(true);

    // useEffect(() => {
    //     let slider;
    //     // Tiny slider only can be loaded once and can only be loaded clint side
    //     if (typeof window !== "undefined" && ref.current) {
    //     ref.current = false;
    //     // Lazy load the slider code client side
    //     import("tiny-slider").then((x) => {
    //         slider = x.tns({
    //             container: '.hero-slider',
    //             slideBy: 'page',
    //             autoplay: true,
    //             autoplayButtonOutput: false,
    //             mouseDrag: true,
    //             gutter: 0,
    //             items: 1,
    //             nav: false,
    //             controls: true,
    //             controlsText: ['<i class="lni lni-chevron-left"></i>', '<i class="lni lni-chevron-right"></i>'],
    //         });
    //     });
    //     }
    //     // Destory the slider when it is unmouted
    //     return slider?.destroy();
    // }, []);       

  return (    
    <>
      {/* Start Hero Area */}
      <section className="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 custom-padding-right">
              <div className="slider-head">
                {/* Start Hero Slider */}
                <div className="hero-slider" >
                  {/* Start Single Slider */}
                  {
                    sliders && sliders?.map((Item, index) => (                  
                      <HeroAreaSlider {...Item} key= {Math.random()} />
                    ))
                  }
                  {/* End Single Slider */}
                </div>
                {/* End Hero Slider */}
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="row">
                {                  
                  banners && banners?.map((banner, index) => (
                    <div 
                    className={`${index===0 ? 'col-lg-12 col-md-6 col-12 md-custom-padding' : 'col-lg-12 col-md-6 col-12'}`}
                    key = {Math.random}>
                      <HeroAreaBanner {...banner} {...index} />
                    </div>
                  ))                  
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Area */}
    </>
  )
}
