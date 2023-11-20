import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';

import PlasticImage from '../images/plastic.png';
import PaperImage from '../images/paper.png';
import GlassImage from '../images/glass.png';
import MetalImage from '../images/metal.png';
import ElectronicsImage from '../images/electronics.png';
import BatteryImage from '../images/battery.png';


function InfoModal({ showInfo, handleCloseInfo }) {
    const recyclingTypes = [
        {
          name: 'Plástico',
          description: 'Garrafas PET, recipientes de produtos de limpeza, embalagens de alimentos.',
          image: PlasticImage,
          bgcolor: 'danger'
        },
        {
          name: 'Papel',
          description: 'Jornais, revistas, papelão, embalagens de papel.',
          image: PaperImage,
          bgcolor: 'primary'
        },
        {
          name: 'Vidro',
          description: 'Garrafas, potes, frascos e outros itens de vidro.',
          image: GlassImage,
          bgcolor: 'success'
        },
        {
          name: 'Metal',
          description: 'Latas de alumínio, tampas, ferragens e arames.',
          image: MetalImage,
          bgcolor: 'warning'
        },
        {
          name: 'Eletrônicos',
          description: 'Celulares, equipamentos de informática, pequenos eletrodomésticos.',
          image: ElectronicsImage,
          bgcolor: 'secondary'
        },
        {
          name: 'Baterias',
          description: 'Baterias de celular, baterias de laptop, pilhas alcalinas, entre outras.',
          image: BatteryImage,
          bgcolor: 'light'
        }
      ];
  
    return (
        <Modal show={showInfo} onHide={handleCloseInfo} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Tipos de Resíduos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row xs={1} md={2} className="g-4">
                {recyclingTypes.map((type, idx) => (
                    <Col key={idx}>
                    <Card 
                    bg={type.bgcolor}
                    text={type.bgcolor === 'light' ? 'dark' : 'white'}
                        >
                        <Card.Img variant="top" src={type.image} />
                        <Card.Body>
                        <Card.Title>{type.name}</Card.Title>
                        <Card.Text>{type.description}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseInfo}>
                Fechar
                </Button>
            </Modal.Footer>
        </Modal>
  );
}

export default InfoModal;
