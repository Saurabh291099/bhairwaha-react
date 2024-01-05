import React, { createcontext, useContext } from 'react';
import './App.css';
import Home from './pages/home/Home';
import './style/main.css';
import './style/responsive.css';
import { Route, Router, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Facility from './pages/facility/Facility';
import Gallery from './pages/gallery/Gallery';
import Rooms from './pages/rooms/Rooms';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoteContext from './context/notes/NoteContext';

// const 

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  const { websiteData , slugs,PageTitle,SeoData } = useContext(NoteContext);
  // Return slugs
  const slug = Object.values(slugs).map(page => page.Slug);

  // Key value Slugss
  const slugToPageName = Object.fromEntries(
    Object.entries(slugs).map(([key, value]) => [value.Slug, value.PageName])
  );

  //Seo Data
  const transformedData = SeoData.reduce((result, page) => {
    result[page.PageName] = page.Data;
    return result;
  }, {});

  const PageToComponent = {
    "about.html": <About Pagetitle={PageTitle.About} Seodata = {transformedData["About"]} />,
    "contact.html": <Contact Pagetitle={PageTitle.Contact} Seodata = {transformedData["Contact"]} />,
    "facility.html":<Facility Pagetitle={PageTitle.Facilities } Seodata = {transformedData["Facilities"]} />,
    "gallery1.html":<Gallery Pagetitle={PageTitle.Gallery} Seodata = {transformedData["Gallery"]} />,
    "rooms-category.html":<Rooms Pagetitle={PageTitle.Rooms} Seodata = {transformedData["Rooms"]} />,

    "cancellation.html":<Rooms Pagetitle={PageTitle.Rooms} Seodata = {transformedData["Cancellation"]} />,
    "terms.html":<Gallery Pagetitle={PageTitle.Gallery} Seodata = {transformedData["Terms and condition"]} />,
    "privacy.html":<Facility Pagetitle={PageTitle.Facilities } Seodata = {transformedData["Cancellation"]} />
    // Add more mappings as needed
  };

  

  
  return (
    <>


        <Navbar slug={slug} />
        <Routes>
          <Route path="/" exact element={<Home Seodata = {transformedData["Home"]} />} />

          {slug.map(slug => (
              <Route
                key={slug}
                path={`/${slug}`}
                exact
                // You can replace the component with the appropriate component for each route
                element={PageToComponent[slugToPageName[slug]]}
              />
          ))}
          <Route path="*" element={<Home Seodata = {transformedData["Home"]} />} />
        </Routes>
        <Footer slug={slug} />

    </>
  );
}

export default App;
