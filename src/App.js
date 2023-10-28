import React from 'react';
import RecyclingMap from './components/RecyclingMap';
import Stack from 'react-bootstrap/Stack';
import Header from './components/Header';
import Card from 'react-bootstrap/Card';

function App() {
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
        <img
          src= "https://www.ferrovelhocoradin.com.br/wp-content/uploads/2019/06/Lixeiras.png"
          alt="Leixeira image"
          style={{ width: '50%', height: 'auto' }}
        />
      </div>
    </Stack>
  );
}

export default App;
