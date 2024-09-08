import React, { useState } from 'react';
import { Card, ListGroup, Button, Modal } from 'react-bootstrap';
import './css/Notification.css';

const notifications = [
  { id: 1, message: 'New comment on your post', time: '5 mins ago' },
  { id: 2, message: 'Server downtime detected', time: '10 mins ago' },
  { id: 3, message: 'New follower added', time: '20 mins ago' },
  { id: 4, message: 'New message received', time: '30 mins ago' },
  { id: 5, message: 'Password changed successfully', time: '1 hour ago' },
  { id: 6, message: 'App update available', time: '2 hours ago' },
  { id: 7, message: 'Subscription renewed', time: '3 hours ago' },
  { id: 8, message: 'Payment received', time: '4 hours ago' },
];

const Notifications = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (notification) => {
    setSelectedNotification(notification);
    setShowModal(true);
  };

  return (
    <Card className="custom-notifications-card">
      <Card.Body>
        <Card.Title className="custom-notifications-title">Notifications</Card.Title>
        <Card.Text className="custom-notifications-info">
          Handcrafted by our friend and colleague Nazare Emanuel-Ioan. Please check out the full documentation.
        </Card.Text>
        <ListGroup variant="flush">
          {notifications.map(notification => (
            <ListGroup.Item
              key={notification.id}
              className="custom-notification-item"
              onClick={() => handleShow(notification)}
            >
              <div className="d-flex justify-content-between">
                <span>{notification.message}</span>
                <small >{notification.time}</small>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="notification-buttons mt-4 text-center">
          <h1 className="mb-4">Notification Locations</h1>
          <p className="mb-4">Click to view notifications</p>

          <div className="row mb-4 justify-content-center">
            {notifications.map(notification => (
              <div className="col-md-4 mb-2" key={notification.id}>
                <Button
                  className="notification-button"
                  variant="outline-secondary"
                  block
                  onClick={() => handleShow(notification)}
                >
                  {notification.message}
                </Button>
              </div>
            ))}
          </div>

          <h2 className="mb-4">View All Notifications</h2>
          <div>
            <Button className="notification-button" variant="outline-primary" block onClick={() => handleShow(null)}>
              View All
            </Button>
          </div>
        </div>
      </Card.Body>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedNotification ? selectedNotification.message : 'Notifications'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedNotification ? (
            <div>
              <p><strong>Message:</strong> {selectedNotification.message}</p>
              <p><strong>Time:</strong> {selectedNotification.time}</p>
            </div>
          ) : (
            <ListGroup variant="flush">
              {notifications.map(notification => (
                <ListGroup.Item key={notification.id}>
                  <div className="d-flex justify-content-between">
                    <span>{notification.message}</span>
                    <small className="text-muted">{notification.time}</small>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default Notifications;
