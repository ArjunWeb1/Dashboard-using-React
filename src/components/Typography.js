import React from 'react';
import { Card } from 'react-bootstrap';
import '../components/css/Typography.css';

const Typography = () => {
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title className="custom-title">Light Bootstrap Table Heading</Card.Title>
        <Card.Subtitle className="custom-subtitle">Created using Montserrat Font Family</Card.Subtitle>
        <Card.Text>
          <h1 className="animated-heading">Header 1: The Journey of Modern Design</h1>
          <h2 className="animated-heading">Header 2: Exploring the Depths of UI/UX</h2>
          <h3 className="animated-heading">Header 3: Innovations in Web Development</h3>
          <h4 className="animated-heading">Header 4: The Evolution of JavaScript</h4>
          <h5 className="animated-heading">Header 5: Embracing React and Beyond</h5>
          <h6 className="animated-heading">Header 6: The Future of Front-End Technologies</h6>
          <p className="animated-paragraph">In the ever-changing world of technology, staying ahead requires continuous learning and adaptation. From the latest frameworks to emerging design patterns, the landscape is both exciting and challenging.</p>
          <blockquote className="custom-blockquote">
            "Technology is best when it brings people together." - Matt Mullenweg
          </blockquote>
          <p className="muted-text">Staying updated with the latest trends and technologies is crucial in this fast-paced industry.</p>
          <p className="primary-text">The power of innovation lies in the ability to transform ideas into reality.</p>
          <p className="info-text">Information is the oil of the 21st century, and analytics is the combustion engine.</p>
          <p className="success-text">Success in tech is about learning, growing, and continuously pushing the boundaries.</p>
          <p className="warning-text">Always be aware of the security implications of the technologies you use.</p>
          <p className="danger-text">Neglecting best practices can lead to catastrophic failures.</p>
          <h3>Header with small subtitle <small className="text">This is a small subtitle using the small tag</small></h3>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Typography;
