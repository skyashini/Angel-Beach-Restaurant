import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/14.png';
import AboutChef2 from '../utils/img/15.png';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

const About = () => {
    return (
        <div className='about-page'>
            <header className='hero-section'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-uppercase display-4 text-gradient fw-bold'>About Us</h1>
                </div>
            </header>

            <div className='container about-content my-5'>
            <h1 class="center-heading">Welcome to Angel Beach Restaurant</h1>

                <p className='lead'>
                Nestled along the stunning shores of Coastal Town, Angel Beach Restaurant offers a perfect blend of exquisite cuisine, breathtaking ocean views, and a relaxed, inviting atmosphere. Whether you're looking for a romantic dinner, a family gathering, or a casual lunch by the sea, we cater to every occasion with warmth and elegance.</p>
                <h3>Our Story</h3>
                <p>Angel Beach Restaurant was born out of a passion for great food and a love for the ocean. Founded in 2010, we’ve grown from a small seaside café to one of the most beloved dining destinations in the region. Our mission is simple: to create memorable dining experiences with dishes that celebrate the rich culinary traditions of the island, using only the freshest local ingredients.</p>

                <div className='row my-5'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid rounded shadow-lg' alt="Chef 1" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid rounded shadow-lg' alt="Chef 2" />
                    </div>
                </div>

                <p>Our menu is a carefully curated selection of the finest seafood, local specialties, and international dishes. We take pride in sourcing our ingredients from local fishermen, farmers, and artisans, ensuring that every meal is a true taste of the region. From our signature grilled lobster to our handcrafted desserts, every dish is prepared with the utmost care and attention to detail.</p>
            </div>

            <div className='gallery-section py-5'>
                <ImageGallery />
            </div>

            {/* Uncomment below if Reviews is ready */}
            {/* <div className='my-5'>
                <Reviews />
            </div> */}
        </div>
    );
}

export default About;
