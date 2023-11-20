import React, { useState } from 'react';
import RecyclingMap from './components/RecyclingMap';
import ImageEducation from './components/ImageEducation';
import TypesInfoModal from './components/TypesInfoModal';
import Stack from 'react-bootstrap/Stack';
import Header from './components/Header';
import Card from 'react-bootstrap/Card';
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
          <Button variant="primary" size='lg' onClick={handleShowInfo}>
            Tipos de Recicláveis
          </Button>
        </div>
        
        <TypesInfoModal showInfo={showInfo} handleCloseInfo={handleCloseInfo} />
      </div>

      <div className="p-2">
        <ImageEducation />
      </div>
    </Stack>
  );
}

export default App;
