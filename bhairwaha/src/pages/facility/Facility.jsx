import React, { useContext } from 'react'
import './faclity.css'
import Banner from '../../components/Banner'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'
import FacilityContent from './FacilityContent';
import aboutImage from '../../assets/images/about-pageimg.png'
import superDelux from '../../assets/images/superdelux.png'
import suiteRoom from '../../assets/images/suiteroom.png'
import steam from '../../assets/images/steam-sunna.png'
import NoteContext from '../../context/notes/NoteContext';

const Facility = ({Pagetitle,Seodata}) => {
  const {Footer} = useContext(NoteContext);

  const facility = [
    { 'heading': 'In room Dinning', 'para': 'Enjoy the convenience of in-room dining at Bhairahawa Garden Resort. Experience the delight of dining in your own cosy haven. From breakfast in bed to a candlelit dinner for two, our room service caters to your every craving. Its the easy way to dine without leaving your room at Lumbinis best resort.', 'images': [aboutImage, superDelux, suiteRoom, steam] },
    { 'heading': 'RESTAURANTS', 'para': 'Experience the luxury of fine dining at the heart of Bhairahawa Garden Resort. Our very own multi-cuisine restaurant guarantees a satisfying dining experience. Whether its a family feast, a romantic evening, or a casual dinner, our cosy, uniquely designed venue is your perfect choice. Experience the best of Lumbinis resort dining – a delicious escape for food enthusiasts and comfort seekers alike.', 'images': [aboutImage, superDelux, suiteRoom, steam] },
  ]


  const nearByPlace = [
    { imageUrl: steam, text: 'Thai Monastery' },
    { imageUrl: aboutImage, text: 'World Peace Pagoda' },
    { imageUrl: superDelux, text: 'Lumbini Museum' },
    { imageUrl: suiteRoom, text: 'World Peace Pagoda' },
  ];

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
      <Helmet>
          <link rel="icon" href={Footer.Logo} />
          <title>{Seodata.Title}</title>
          <meta name="description" content={Seodata.Description} />
      </Helmet>
      <Banner text={Pagetitle["Title"]} Image={Pagetitle["Image"]} />
      <div className='faclity-section'>
        <section className='aboutPage-Facility-section'>
          <div class="container container-wrapper">
            {facility.map((data, index) => {
              return (
                <FacilityContent FacilityImages={data.images} heading={data.heading} para={data} index={index % 2 !== 0 ? 'row-reverse' : 'row'} />
              )
            })}

          </div>
        </section>

        <section class="nearby-places section thingtodo-section">
          <div class="container">
            <h2 class="section-heading my-4">OUR MENU INCLUDES</h2>
            <div class="wrapper-div-nearby thingstodo-wrapper">
              <Slider {...settings1} className='image-slider'>
                {nearByPlace.map((data) => {
                  return (
                    <div class="nearby-slider">
                      <img src={data.imageUrl} alt="Things to do" />
                      <div class="slider-caption">
                        <span>{data.text}</span>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default Facility
