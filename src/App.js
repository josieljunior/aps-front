import React from 'react';
import RecyclingMap from './RecyclingMap';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="header">
              Reciclagem
            </div>
            <RecyclingMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
