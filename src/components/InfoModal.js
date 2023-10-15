import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function InfoModal({ isOpen, onRequestClose, point }) {
  return (
    <Modal show={isOpen} onHide={onRequestClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{point && point.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Endereço: {point && point.address}</p>
        <p>Horário de funcionamento: {point && point.hours}</p>
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
