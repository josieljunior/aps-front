import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { recyclingPoints } from './data';
import InfoModal from './InfoModal';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

function RecyclingMap() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);

  const openModal = (point) => {
    console.log('Opening modal...');
    setSelectedPoint(point);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal...');
    setModalIsOpen(false);
    setSelectedPoint(null);
  };

  return (
    <div>
      <div className="map-container">
        <MapContainer center={[-23.550520, -46.633308]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {recyclingPoints.map(point => (
            <Marker
              key={point.id}
              position={[point.lat, point.lng]}
              eventHandlers={{ click: () => openModal(point) }}
              icon={
                new Icon({
                  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
                  iconUrl: require('leaflet/dist/images/marker-icon.png'),
                  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
                })
              }
            >
            </Marker>
          ))}
        </MapContainer>
      </div>
      <InfoModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        point={selectedPoint}
      />
    </div>
  );
}

export default RecyclingMap;


