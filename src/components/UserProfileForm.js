import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../components/css/UserProfileForm.css';

const UserProfileForm = ({ user, onInputChange, onSave, invalidFields }) => {
  const [showInput, setShowInput] = useState({});

  const handleLabelClick = (name) => {
    setShowInput((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Enter your details here
    </Tooltip>
  );

  return (
    <Form className="user-profile-form">
      {[
        { label: 'Company', name: 'company', type: 'text' },
        { label: 'Username', name: 'username', type: 'text' },
        { label: 'Email address', name: 'email', type: 'email' },
        { label: 'First Name', name: 'firstName', type: 'text' },
        { label: 'Last Name', name: 'lastName', type: 'text' },
        { label: 'Address', name: 'address', type: 'text' },
        { label: 'City', name: 'city', type: 'text' },
        { label: 'Country', name: 'country', type: 'text' },
        { label: 'Postal Code', name: 'postalCode', type: 'text' },
        { label: 'About Me', name: 'aboutMe', type: 'textarea' },
      ].map((field, index) => (
        <Form.Group key={index} className="mb-3">
          <Form.Label 
            className="form-label" 
            onClick={() => handleLabelClick(field.name)}
          >
            {field.label}
          </Form.Label>
          <div 
            className={`form-control-wrapper ${showInput[field.name] ? 'show' : ''}`}
          >
            {field.type === 'textarea' ? (
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder={field.label} 
                name={field.name} 
                value={user[field.name]} 
                onChange={onInputChange} 
                className={`form-control ${invalidFields?.includes(field.name) ? 'invalid' : ''} ${field.name === 'email' ? 'border-animate' : ''}`}
              />
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={renderTooltip}
              >
                <Form.Control 
                  type={field.type} 
                  placeholder={field.label} 
                  name={field.name} 
                  value={user[field.name]} 
                  onChange={onInputChange} 
                  className={`form-control ${invalidFields?.includes(field.name) ? 'invalid' : ''} ${field.name === 'email' ? 'border-animate' : ''}`}
                />
              </OverlayTrigger>
            )}
          </div>
        </Form.Group>
      ))}

      <Button className="submit-btn" variant="primary" onClick={onSave}>Save</Button>
    </Form>
  );
};

UserProfileForm.propTypes = {
  user: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  invalidFields: PropTypes.array
};

UserProfileForm.defaultProps = {
  invalidFields: []
};

export default UserProfileForm;
