import React, { useState } from 'react';
import { Card, Table, Button, Modal, Form } from 'react-bootstrap';
import '../components/css/TableList.css';

const initialData = [
  { id: 1, name: 'Dakota Rice', salary: '$36,738', country: 'Niger', city: 'Oud-Turnhout' },
  { id: 2, name: 'Minerva Hooper', salary: '$23,789', country: 'Curaçao', city: 'Sinaai-Waas' },
  { id: 3, name: 'Sage Rodriguez', salary: '$56,142', country: 'Netherlands', city: 'Baileux' },
  { id: 4, name: 'Philip Chaney', salary: '$38,735', country: 'Korea, South', city: 'Overland Park' },
  { id: 5, name: 'Doris Greene', salary: '$63,542', country: 'Malawi', city: 'Feldkirchen in Kärnten' },
  { id: 6, name: 'Mason Porter', salary: '$78,615', country: 'Chile', city: 'Gloucester' },
];

const TableList = () => {
  const [data, setData] = useState(initialData);
  const [editingRow, setEditingRow] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', salary: '', country: '', city: '' });

  const handleEditClick = (row) => {
    setEditingRow(row);
    setEditForm({ name: row.name, salary: row.salary, country: row.country, city: row.city });
    setShowEditModal(true);
  };

  const handleDelete = (id) => {
    setData(data.filter(row => row.id !== id));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSaveEdit = () => {
    setData(data.map(row =>
      row.id === editingRow.id
        ? { ...row, ...editForm }
        : row
    ));
    setShowEditModal(false);
    setEditingRow(null);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditingRow(null);
  };

  return (
    <>
      <Card className="custom-card">
        <Card.Body>
          <Card.Title className="custom-title">Striped Table</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Here is a subtitle for this table</Card.Subtitle>
          <Table striped bordered hover className="custom-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Country</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.id} className="table-row">
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.salary}</td>
                  <td>{row.country}</td>
                  <td>{row.city}</td>
                  <td>
                    <Button className="action-button edit-button" onClick={() => handleEditClick(row)}>
                      <i className="fas fa-edit"></i> 
                    </Button>
                    <Button className="action-button delete-button" onClick={() => handleDelete(row.id)}>
                      <i className="fas fa-trash-alt"></i> 
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="custom-card mt-4">
        <Card.Body>
          <Card.Title className="custom-title">Table on Plain Background</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Here is a subtitle for this table</Card.Subtitle>
          <Table bordered className="custom-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Country</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.id} className="table-row">
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.salary}</td>
                  <td>{row.country}</td>
                  <td>{row.city}</td>
                  <td>
                    <Button className="action-button edit-button" onClick={() => handleEditClick(row)}>
                      <i className="fas fa-edit"></i> 
                    </Button>
                    <Button className="action-button delete-button" onClick={() => handleDelete(row.id)}>
                      <i className="fas fa-trash-alt"></i> 
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Row</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="text"
                name="salary"
                value={editForm.salary}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={editForm.country}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={editForm.city}
                onChange={handleEditChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TableList;
