import React from "react";
import "./Modal.css";
import ReactPlayer from "react-player";

function Modal({ camera,setOpenModal, url }) {
  console.log(camera, setOpenModal, url);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{camera.name}</h1>
        </div>
        <div className="body">
          <p>{url}</p>
          <ReactPlayer url={url} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
