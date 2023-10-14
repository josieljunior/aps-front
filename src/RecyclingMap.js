import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { recyclingPoints } from './data';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

function RecyclingMap() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="header">
            Reciclagem
          </div>
          <div className="map-container">
            <MapContainer center={[-23.550520, -46.633308]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {recyclingPoints.map(point => (
                <Marker
                  key={point.id}
                  position={[point.lat, point.lng]}
                  icon={
                    new Icon({
                      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
                      iconUrl: require('leaflet/dist/images/marker-icon.png'),
                      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
                    })
                  }
                >
                  <Popup>
                    {point.name}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecyclingMap;


