import React, { useState } from 'react';
import './Contact.css';
import { ContactInfo } from '../components/ContactInfo';
import { Form } from 'react-bootstrap';
import { Reviews } from '../components/Reviews';

function Contact() {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && comment) {
            const newReview = { name, comment };
            setReviews([...reviews, newReview]);
            setName('');
            setComment('');
        }
    };

    return (
        <div className='contact-page'>
            <header className='contact-header d-flex align-items-center justify-content-center'>
                <h1 className='text-light display-4'>Contact Us</h1>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 mb-4 d-flex align-items-center justify-content-center'>
                        <ContactInfo />
                    </div>
                    <div className='col-lg-6'>
                        <div className='form-container p-4 shadow-sm rounded'>
                            <h3 className='text-center mb-4'>Leave Us a Review</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='mb-3'>
                                    <Form.Label htmlFor='first-name'>First Name</Form.Label>
                                    <Form.Control
                                        type='text'
                                        id='first-name'
                                        placeholder='Enter your name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className='mb-4'>
                                    <Form.Label htmlFor='comments'>Comments</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        id='comments'
                                        placeholder='Share your thoughts...'
                                        rows={4}
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                </Form.Group>

                                <button type='submit' className='btn btn-primary btn-block btn-lg'>Submit</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='reviews-section py-5'>
                <div className='container'>
                    <h3 className='text-center text-light mb-4'>What People Are Saying</h3>
                    <Reviews reviews={reviews} />
                </div>
            </div>
        </div>
    );
}

export default Contact;
