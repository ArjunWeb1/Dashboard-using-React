import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../components/css/UserProfileCard.css';

const UserProfileCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card className="user-profile-card">
      <Card.Img variant="top" src={user.profilePicture} className="bgImage" />
      <Card.Body>
        <Card.Title className="card-title">{user.name}</Card.Title>
        <Card.Subtitle className="card-subtitle mb-2 text-muted">{user.email}</Card.Subtitle>
        <Card.Text className="card-text"><strong>Company: </strong>{user.company}</Card.Text>

        {showDetails && (
          <>
            <Card.Text className="card-text"><strong>Username: </strong>{user.username}</Card.Text>
            <Card.Text className="card-text"><strong>First Name: </strong>{user.firstName}</Card.Text>
            <Card.Text className="card-text"><strong>City: </strong>{user.city}</Card.Text>
            <Card.Text className="card-text"><strong>Country: </strong>{user.country}</Card.Text>
            <Card.Text className="card-text bio"><strong>About Me: </strong>{user.aboutMe}</Card.Text>
          </>
        )}

        <Button className="btn-primary" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserProfileCard;
