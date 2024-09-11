import React from 'react';
import './Home.css';
import AboutImg from '../utils/img/26.png';
import ContactImage from '../utils/img/21.png';
import { Link } from 'react-router-dom';
import { MenuBtn } from '../components/MenuBtn';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';

function Home() {
    return (
        <div className='main-container'>
            <header className='hero'>
                <div className='overlay'>
                    <h1>Welcome to Angel Beach Restaurant</h1>
                    <p>Indulge in the flavors of Angel Beach, where every dish tells a story of passion, freshness, and culinary artistry. Experience dining like never before.</p>
                    
                </div>
            </header>

            <section className='about'>
                <div className='about-inner'>
                    <div className='about-text'>
                        <h2>About Us</h2>
                        <p>At Angel Beach, we blend tradition with innovation to craft unforgettable dining experiences. Located in [Location], our chefs use the freshest ingredients to create dishes that delight the senses. Whether you're here for a casual meal or a special occasion, we’re committed to making every moment memorable. Welcome to our table—where flavor meets passion.</p>
                        <Link to="/about" className='btn-primary'>Learn More</Link>
                    </div>
                    <div className='about-image'>
                        <img src={AboutImg} alt="About Us" />
                    </div>
                </div>
            </section>

          

            <section className='contact'>
                <div className='contact-inner'>
                    <div className='contact-image'>
                        <img src={ContactImage} alt="Contact Us" />
                    </div>
                    <div className='contact-info'>
                        <ContactInfo />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
