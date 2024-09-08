import React from 'react';
import { Card } from 'react-bootstrap';
import '../components/css/Map.css'
const Maps = () => {
  return (
    <Card className='Map'>
      <Card.Body>
        <Card.Title>Maps</Card.Title>
        <Card.Text>
          This page could include interactive maps or other map-related content.
        </Card.Text>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.546348327383!2d-122.41578368468172!3d37.77492927975941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858065f88a3d49%3A0x1d2d7c6b8e2f05d2!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1617023312641!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </Card.Body>
    </Card>
  );
};

export default Maps;
