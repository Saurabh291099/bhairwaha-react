import React from 'react'
import '../../style/gallery.css'
import Banner from '../../components/Banner'
import ImageSlider from '../../components/ImageSlider'
import { Link } from 'react-router-dom'


import aboutImage from '../../assets/images/about-pageimg.png'
import superDelux from '../../assets/images/superdelux.png'
import suiteRoom from '../../assets/images/suiteroom.png'
import steam from '../../assets/images/steam-sunna.png'
import OfferSection from '../../components/OfferSection'

const Gallery = () => {

  const hotelHeading = 'Hotel'

  const galleryImageData = [
    { imageUrl: aboutImage },
    { imageUrl: superDelux },
    { imageUrl: suiteRoom },
    { imageUrl: steam },
  ];
  const restoImageData = [
    { imageUrl: aboutImage },
    { imageUrl: superDelux },
    { imageUrl: suiteRoom },
    { imageUrl: steam },
  ];
  const roomsImageData = [
    { imageUrl: aboutImage },
    { imageUrl: superDelux },
    { imageUrl: suiteRoom },
    { imageUrl: steam },
  ];
  const nearByImageData = [
    { imageUrl: aboutImage },
    { imageUrl: superDelux },
    { imageUrl: suiteRoom },
    { imageUrl: steam },
  ];

  const gallery = [
    { 'heading': 'HOTEL', 'images': [aboutImage, superDelux, suiteRoom, steam] },
    { 'heading': 'RESTAURANT', 'images': [aboutImage, superDelux, suiteRoom, steam] },
    { 'heading': 'ROOMS & SUITES', 'images': [aboutImage, superDelux, suiteRoom, steam] },
    { 'heading': 'NEAR BY PLACES', 'images': [aboutImage, superDelux, suiteRoom, steam] },
  ]

  // const settings1 = {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     responsive: [
  //         {
  //             breakpoint: 1024,
  //             settings: {
  //                 slidesToShow: 3,
  //                 slidesToScroll: 3,
  //                 infinite: true,
  //                 dots: true
  //             }
  //         },
  //         {
  //             breakpoint: 600,
  //             settings: {
  //                 slidesToShow: 2,
  //                 slidesToScroll: 2,
  //                 initialSlide: 2
  //             }
  //         },
  //         {
  //             breakpoint: 480,
  //             settings: {
  //                 slidesToShow: 1,
  //                 slidesToScroll: 1
  //             }
  //         }
  //     ]
  // };


  return (
    <>
      <Banner />
      {/* <ImageSlider GalleryImage={gallery} /> */}

      {gallery.map((data) => {
        return (
          <ImageSlider GalleryImage={data.images} heading={data.heading} />
        )
      })}



      {/* <ImageSlider GalleryImage={roomsImageData} heading={hotelHeading} />
      <ImageSlider GalleryImage={nearByImageData} heading={hotelHeading} /> */}

      <div className="container d-flex justify-content-center">
        <Link to='' class="custom-btn">BOOK NOW</Link>
      </div>

      <OfferSection />
    </>
  )
}

export default Gallery
