import React, { useContext } from 'react'
import banner from '../../assets/images/banner.jpg'
import NoteContext from '../../context/notes/NoteContext';

const HomeBanner = (props) => {
    const { Banner } = useContext(NoteContext);
    return (
        <>
            <div class="banner">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        
                        {Banner.map((banner,index)=>{
                            return <div class={`carousel-item ${index===0?"active":""}`}>
                                        <img src={banner.url} class="d-block w-100" alt="banner"/>
                                        <div class="carousel-caption d-md-block">
                                            <p><span>{banner.Subhead}</span></p>
                                            <h2><span>{banner.Heading}</span></h2>
                                        </div>
                                    </div>
                        })}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeBanner
