import React, { useContext } from 'react'
import '../../style/gallery.css'
import Banner from '../../components/Banner'
import ImageSlider from '../../components/ImageSlider'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import NoteContext from '../../context/notes/NoteContext';


import aboutImage from '../../assets/images/about-pageimg.png'
import superDelux from '../../assets/images/superdelux.png'
import suiteRoom from '../../assets/images/suiteroom.png'
import steam from '../../assets/images/steam-sunna.png'
import OfferSection from '../../components/OfferSection'

const Gallery = ({ Pagetitle, Seodata }) => {
  const { Footer, Gallery, Engine } = useContext(NoteContext);


  const filteredGallery = Gallery.map(category => ({
    ...category,
    Images: [...new Set(category.Images)],
  }));
  const hotelHeading = 'Hotel'

  // const galleryImageData = [
  //   { imageUrl: aboutImage },
  //   { imageUrl: superDelux },
  //   { imageUrl: suiteRoom },
  //   { imageUrl: steam },
  // ];
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

  // const gallery = [
  //   { 'heading': 'HOTEL', 'images': [aboutImage, superDelux, suiteRoom, steam] },
  //   { 'heading': 'RESTAURANT', 'images': [aboutImage, superDelux, suiteRoom, steam] },
  //   { 'heading': 'ROOMS & SUITES', 'images': [aboutImage, superDelux, suiteRoom, steam] },
  //   { 'heading': 'NEAR BY PLACES', 'images': [aboutImage, superDelux, suiteRoom, steam] },
  // ]


  // console.log{Gallery}


  return (
    <>
      <Helmet>
        <link rel="icon" href={Footer.Logo} />
        <title>{Seodata.Title}</title>
        <meta name="description" content={Seodata.Description} />
      </Helmet>
      <Banner text={Pagetitle["Title"]} Image={Pagetitle["Image"]} />


      {/* <ImageSlider GalleryImage={gallery} /> */}

      {/* {Gallery.map((data) => {
        return (
          <ImageSlider GalleryImage={data.Images} heading={data.Category} />
        )
      })} */}

      {/* {Gallery.map((data, index) => {
        return (
          <ImageSlider GalleryImage={data.Images} heading={data.Category} key={index} />

        );
      })} */}
      {filteredGallery.map((data, index) => (
        
        <ImageSlider key={index} GalleryImage={data.Images} heading={data.Category} required={data.Required} />
      ))}

      {/* <ImageSlider /> */}

      {/* <ImageSlider GalleryImage={roomsImageData} heading={hotelHeading} />
      <ImageSlider GalleryImage={nearByImageData} heading={hotelHeading} /> */}

      <div className="container d-flex justify-content-center">
        <Link to={Engine} target='_blank' class="custom-btn">BOOK NOW</Link>
      </div>

      <OfferSection />
    </>
  )
}

export default Gallery
