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
          src={process.env.PUBLIC_URL + '/Lixeira.png'/100}
          alt="Third item image"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </Stack>
  );
}

export default App;
