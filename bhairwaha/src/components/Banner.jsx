import React from 'react'
import aboutBanner from '../assets/images/about-banner.png'
const Banner = () => {
    return (
        <>
            <div className="pages-banner">
                <img src={aboutBanner} alt="aboutBanner" />

                <h1 className='banner-heading'>About</h1>
            </div>
        </>
    )
}

export default Banner
