import React from 'react';
import { Card } from 'react-bootstrap';
import './css/Icon.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar, faHome, faUser, faCog, faHeart, faBell, faEnvelope, faMapMarker, faCamera, faMusic } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const iconData = [
  { icon: faCoffee, label: 'Coffee', className: 'icon-coffee' },
  { icon: faStar, label: 'Star', className: 'icon-star' },
  { icon: faHome, label: 'Home', className: 'icon-home' },
  { icon: faUser, label: 'User', className: 'icon-user' },
  { icon: faCog, label: 'Settings', className: 'icon-cog' },
  { icon: faHeart, label: 'Heart', className: 'icon-heart' },
  { icon: faBell, label: 'Bell', className: 'icon-bell' },
  { icon: faEnvelope, label: 'Envelope', className: 'icon-envelope' },
  { icon: faMapMarker, label: 'Map Marker', className: 'icon-map-marker' },
  { icon: faCamera, label: 'Camera', className: 'icon-camera' },
  { icon: faMusic, label: 'Music', className: 'icon-music' },
  { icon: faFacebook, label: 'Facebook', className: 'icon-facebook' },
  { icon: faTwitter, label: 'Twitter', className: 'icon-twitter' },
  { icon: faInstagram, label: 'Instagram', className: 'icon-instagram' },
  { icon: faLinkedin, label: 'LinkedIn', className: 'icon-linkedin' },
  { icon: faGithub, label: 'GitHub', className: 'icon-github' },
];

const Icons = () => {
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title className="custom-title">Icon Showcase</Card.Title>
        <Card.Text>
          Discover a variety of free icons with enhanced animations and hover effects.<br />
          Handcrafted by our friends from <a href='https://fontawesome.com'>FontAwesome</a>
        </Card.Text>
        <div className="icon-examples">
          {iconData.map((item, index) => (
            <div key={index} className={`icon-item ${item.className}`}>
              <FontAwesomeIcon icon={item.icon} size="3x" className="icon" />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Icons;
