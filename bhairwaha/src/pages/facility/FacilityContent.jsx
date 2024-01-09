import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import Slider from "react-slick";
import aboutImage from '../../assets/images/aboutimage.png'
import superDelux from '../../assets/images/superdelux.png'
import suiteRoom from '../../assets/images/suiteroom.png'
import steam from '../../assets/images/steam-sunna.png'
import NoteContext from '../../context/notes/NoteContext';


const FacilityContent = ({ FacilityImages, heading }) => {
    const { DataToarrange } = useContext(NoteContext);


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
                    <h2>{DataToarrange[1].Heading}</h2>
                    <p>{DataToarrange[1].Text}</p>
                </div>
            </div>
        </>
    )
}

export default FacilityContent
