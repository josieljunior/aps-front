import { Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function InfoModal({ isOpen, onRequestClose, point }) {
  return (
    <Modal show={isOpen} onHide={onRequestClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{point && point.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <strong>Endereço:</strong> {point && point.address}<br/>
        <strong>Tipo de residuos:</strong> {point && point.wasteType}<br/>
        <strong>Horário de funcionamento:</strong> {point && point.hours}<br/>
        
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
