import React from 'react'
import Slider from "react-slick";

// import aboutImage from '../assets/images/about-pageimg.png'
// import superDelux from '../assets/images/superdelux.png'
// import suiteRoom from '../assets/images/suiteroom.png'
// import steam from '../assets/images/steam-sunna.png'


const ImageSlider = ({ GalleryImage, heading }) => {

    // const GalleryImage = [
    //     { imageUrl: aboutImage },
    //     { imageUrl: superDelux },
    //     { imageUrl: suiteRoom },
    //     { imageUrl: steam },
    // ];


    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className='slider-section'>
                <div className="container">
                    <div className="slider-wrapper">
                        <h2>{heading}</h2>
                        <Slider {...settings1} className='image-slider'>
                            {GalleryImage.map((data, index) => {
                                return (
                                    <div class="nearby-slider" key={heading+'-'+index}>
                                        <img src={data} alt={`Gallery ${index + 1}`} />
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>

                </div>
            </section>

        </>
    )
}

export default ImageSlider
