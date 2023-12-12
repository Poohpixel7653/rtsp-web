import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./components/Modal";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Marks from "./jsons/markers.json";
import ReacePlayerWebSocket from "./components/ReactPlayerWebSocket";
import io from "socket.io-client"; // Add this
import VideoStream from "./components/VideoStream";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCamera, setModalCamera] = useState({});
  const [modalUrl, setModalUrl] = useState("");
  const markers = Marks["markers"];
  const center = Marks["center"];

  return (
    <div className="App">
      {modalOpen && (
        <Modal
          camera={modalCamera}
          setOpenModal={setModalOpen}
          url={modalUrl}
        />
      )}

      <MapContainer center={center} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((mark) => (
          <Marker
            key={mark.id}
            position={mark.coordinate}
            eventHandlers={{
              click: (e) => {
                setModalCamera(mark);
                setModalUrl(mark.url);
                setModalOpen(true);
              },
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
