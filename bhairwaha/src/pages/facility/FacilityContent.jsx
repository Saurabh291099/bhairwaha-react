import React from 'react'

import { Link } from 'react-router-dom'
import Slider from "react-slick";
import aboutImage from '../../assets/images/aboutimage.png'
import superDelux from '../../assets/images/superdelux.png'
import suiteRoom from '../../assets/images/suiteroom.png'
import steam from '../../assets/images/steam-sunna.png'


const FacilityContent = ({ FacilityImages, heading }) => {

    // const suiteRoomData = [
    //     { imageUrl: suiteRoom },
    //     { imageUrl: superDelux },
    //     { imageUrl: aboutImage },
    //     { imageUrl: steam },
    // ];


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>
            <div class="row">
                <div class="col-lg-6 image-div">

                    <Slider {...settings} className='image-slider'>
                        {FacilityImages.map((data) => {
                            return (
                                <div>
                                    <img src={data} alt="About Images" />
                                </div>
                            )
                        })}
                    </Slider>

                </div>
                <div class="col-lg-6 text-div">
                    <h2>{heading}</h2>
                    <p>Enjoy the convenience of in-room dining at Bhairahawa Garden Resort. Experience the delight of dining in your own cosy haven. From breakfast in bed to a candlelit dinner for two, our room service caters to your every craving. It's the easy way to dine without leaving your room at Lumbini's best resort.</p>
                </div>
            </div>
        </>
    )
}

export default FacilityContent
