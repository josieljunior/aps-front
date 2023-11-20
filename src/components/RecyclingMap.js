import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import InfoModal from './InfoModal';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { getRecyclingPoints, getPointDetails } from '../apiService';

function RecyclingMap() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [recyclingPoints, setRecyclingPoints] = useState([]);

  useEffect(() => {
    getRecyclingPoints()
      .then(response => {
        setRecyclingPoints(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the points from the API', error);
      });
  }, []);

  const openModal = (pointId) => {
    getPointDetails(pointId)
      .then(response => {
        setSelectedPoint(response.data);
        setModalIsOpen(true);
      })
      .catch(error => {
        console.error('There was an error fetching the point details from the API', error);
      });
  };

  const closeModal = () => {
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
              eventHandlers={{ click: () => openModal(point.id) }}
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
