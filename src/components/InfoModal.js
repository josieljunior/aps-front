import React, { useState } from 'react';
import { Modal, Button, Nav, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function InfoModal({ isOpen, onRequestClose, point }) {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <Modal show={isOpen} onHide={onRequestClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{point && point.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tab.Container activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="info">Informações</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="location">Localização</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="info">
              <p>Endereço: {point && point.address}</p>
              <p>Horário de funcionamento: {point && point.hours}</p>
            </Tab.Pane>
            <Tab.Pane eventKey="location">
              <p>Latitude: {point && point.latitude}</p>
              <p>Longitude: {point && point.longitude}</p>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onRequestClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoModal;
