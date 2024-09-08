import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faTable, faCog, faBell, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './css/Sidebar.css'


const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar" >

      <Nav defaultActiveKey="/dashboard"  className="flex-column" >
        <a href='https://www.creative-tim.com/?_ga=2.131357903.1976037405.1722576746-737484991.1722576746'><h3>Creative TIM</h3></a>
        <Nav.Link onClick={() => onSelect('dashboard')}><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Nav.Link>
        <Nav.Link onClick={() => onSelect('userProfile')}><FontAwesomeIcon icon={faUser} /> User Profile</Nav.Link>
        <Nav.Link onClick={() => onSelect('tableList')}><FontAwesomeIcon icon={faTable} /> Table List</Nav.Link>
        <Nav.Link onClick={() => onSelect('typography')}><FontAwesomeIcon icon={faCog} /> Typography</Nav.Link>
        <Nav.Link onClick={() => onSelect('icons')}><FontAwesomeIcon icon={faBell} /> Icons</Nav.Link>
        <Nav.Link onClick={() => onSelect('maps')}><FontAwesomeIcon icon={faHeart} /> Maps</Nav.Link>
        <Nav.Link onClick={() => onSelect('notifications')}><FontAwesomeIcon icon={faEnvelope} /> Notifications</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
