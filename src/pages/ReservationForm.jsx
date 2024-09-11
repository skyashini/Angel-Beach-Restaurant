import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import ReservationImage from '../utils/img/table.jpg'; // Replace with your image path
import './ReservationForm.css';  // Assume this contains the updated styles
import ReservationService from '../services/ReservationService';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    people: '',
    startdatetime: '', 
    enddatetime: ''
  });

  const [selectedTable, setSelectedTable] = useState(null);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const availableTables = Array.from({ length: 20 }, (_, i) => i + 1); // Array representing table numbers

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    // Get the user ID from localStorage after login
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleTableSelection = (e) => {
    setSelectedTable(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Split the datetime field into start_time and end_time
      const start_time = new Date(formData.startdatetime).toISOString().replace('T', ' ').substring(0, 19);
      const end_time = new Date(formData.enddatetime).toISOString().replace('T', ' ').substring(0, 19);
     
      if (!userId) {
        throw new Error("User ID not found. Please log in again.");
      }
      // Call the reservation method from the service
      const response = await ReservationService.reservation(
        formData.name,
        start_time,
        end_time,
        selectedTable,
        formData.people,
        userId
      );

      alert(`Reservation successful for ${formData.name} at Table ${selectedTable}`);

    } catch (error) {
      // Display error if the reservation fails
      setError(error.message);
    }
  };

  return (
    <div className='reservation-container'>
      <header className='reservation-header'>
        <h1 className='display-4 text-primary'>Table Reservation</h1>
        <p className='lead text-muted'>Secure your table with a few easy steps.</p>
      </header>

      <div className='reservation-form-container shadow p-4 mb-4 bg-white rounded'>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label className="font-weight-bold">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={4}>
              <Form.Group controlId="people">
                <Form.Label className="font-weight-bold">Number of Guests</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Number of guests"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="startdatetime">
                <Form.Label className="font-weight-bold">Start Date & Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="startdatetime"
                  value={formData.startdatetime}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="enddatetime">
                <Form.Label className="font-weight-bold">End Date & Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="enddatetime"
                  value={formData.enddatetime}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <h4 className="mb-4">Select a Table</h4>
          <Row className="mb-4">
            {availableTables.map((table) => (
              <Col xs={6} md={3} key={table}>
                <Form.Check
                  type="radio"
                  label={`Table ${table}`}
                  name="table"
                  value={table}
                  onChange={handleTableSelection}
                  checked={selectedTable == table}
                  custom
                />
              </Col>
            ))}
          </Row>

          {error && <div className="text-danger text-center mt-3">{error}</div>}

          <Button variant="primary" type="submit" className="w-100 mt-4 btn-lg">
            Reserve Now
          </Button>
        </Form>
      </div>

      <div className='reservation-image-container'>
        <img
          src={ReservationImage}
          alt="Reservation"
          className="img-fluid rounded"
        />
      </div>
    </div>
  );
};

export default ReservationForm;
