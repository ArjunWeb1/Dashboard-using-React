import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="text-md-left text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right text-center">
            <p>
              <a href="#about">About Us</a> | <a href="#contact">Contact</a> | <a href="#privacy">Privacy Policy</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
