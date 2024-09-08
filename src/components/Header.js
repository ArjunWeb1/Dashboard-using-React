import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './css/Header.css';

const Header = ({ title, toggleTheme, isDarkMode }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const formatTitle = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1).replace(/([A-Z])/g, ' $1');
  };

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Navbar.Brand><h2>{formatTitle(title)}</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="search-container">
          <FormControl type="text" placeholder="Search" className="search-input" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </Form>
        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link href="#notifications"><FontAwesomeIcon icon={faBell} style={{ color: 'white' }} /></Nav.Link>
          <Nav.Link href="#User"><FontAwesomeIcon icon={faUserCircle} style={{ color: 'white' }} /></Nav.Link>
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
