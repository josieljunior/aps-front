import React, { useState } from 'react';
import RecyclingMap from './components/RecyclingMap';
import Stack from 'react-bootstrap/Stack';
import Header from './components/Header';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function App() {
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => setShowInfo(true);
  const handleCloseInfo = () => setShowInfo(false);

  return (
    <Stack gap={3}>
      <div>
        <Header />
      </div>

      <div className="p-2">
        <Card border="secondary">
          <RecyclingMap />
        </Card>
      </div>

      <div className="p-2">
        <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
          Atenção: A coleta de lixo deve atender os requisitos de reciclagem.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="primary" onClick={handleShowInfo}>
            Tipos de Recicláveis
          </Button>
        </div>
        <Modal show={showInfo} onHide={handleCloseInfo}>
          <Modal.Header closeButton>
            <Modal.Title>Tipos de Recicláveis</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ color: 'red' }}>Vermelho (plástico): garrafas de refrigerante, embalagens de xampu e cremes, embalagens de comida etc.</p>
            <p style={{ color: 'blue' }}>Azul (papel): folhas de caderno, papelão, embalagens de papel etc.</p>
            <p style={{ color: 'green' }}>Verde (vidro): garrafas de cerveja e refrigerante, potes, copos, pratos ou louças de vidro que precisam ser descartadas etc.</p>
            <p style={{ color: 'yellow' }}>Amarelo (metal): latas em geral, papel alumínio, embalagens etc.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseInfo}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="p-2">
        <img
          src="https://www.ferrovelhocoradin.com.br/wp-content/uploads/2019/06/Lixeiras.png"
          alt="Leixeira image"
          style={{ width: '50%', height: 'auto' }}
        />
      </div>

    </Stack>
  );
}

export default App;
