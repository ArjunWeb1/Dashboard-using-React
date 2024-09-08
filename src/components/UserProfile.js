import React, { useState } from 'react';
import UserProfileCard from './UserProfileCard';
import UserProfileForm from './UserProfileForm';
import './css/UserProfile.css';
import { Container, Row, Col } from 'react-bootstrap';

const initialUser = {
  name: 'John',
  email: 'user@example.com',
  bio: 'Software Engineer at Code Tech Inc. Passionate about technology and open-source projects.',
  profilePicture: 'https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png',
  company: 'Code Tech Inc.',
  username: 'user123',
  firstName: 'John',
  lastName: 'Andrew',
  address: 'On Earth',
  city: 'Mumbai',
  country: 'India',
  postalCode: 'ZIP Code',
  aboutMe: 'Software Engineer at Code Tech Inc. Passionate about technology and open-source projects.'
};

const UserProfile = ({ isDarkMode }) => {
  const [user, setUser] = useState(initialUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Save the changes
    console.log("User details saved:", user);
  };

  return (
    <Container>
      <div className={`user-profile-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className={`user-profile-bg ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <Row>
            <Col md={4}>
              <UserProfileCard user={user} isDarkMode={isDarkMode} />
            </Col>
            <Col md={8}>
              <div className={`user-profile-form-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <UserProfileForm user={user} onInputChange={handleInputChange} onSave={handleSaveClick} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
