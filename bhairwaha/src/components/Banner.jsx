import React from 'react'
import aboutBanner from '../assets/images/about-banner.png'
const Banner = (props) => {
    return (
        <>
            <div className="pages-banner">
                <img src={props.Image} alt="aboutBanner" />

                <h1 className='banner-heading'>{props.text}</h1>
            </div>
        </>
    )
}

export default Banner
