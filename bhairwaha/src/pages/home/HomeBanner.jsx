import React from 'react'
import banner from '../../assets/images/banner.jpg'

const HomeBanner = () => {
    return (
        <>
            <div class="banner">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={banner} class="d-block w-100" alt="banner"/>
                                <div class="carousel-caption d-md-block">
                                    <p><span>Gateway into Nature’s Playground</span></p>
                                    <h2><span>Seek Adventure and Thrill in the Arms of Lumbini</span></h2>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src={banner} class="d-block w-100" alt="banner"/>
                                <div class="carousel-caption d-md-block">
                                    <p>Some representative placeholder content for the third slide.</p>
                                    <h2>Third slide label</h2>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src={banner} class="d-block w-100" alt="banner"/>
                                <div class="carousel-caption d-md-block">
                                    <p>Some representative placeholder content for the third slide.</p>
                                    <h2>Third slide label</h2>
                                </div>
                        </div>
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
