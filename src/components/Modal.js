import React, { useEffect } from "react";
import "./Modal.css";
import ReactPlayer from "react-player";
import ReactHlsPlayer from "react-hls-player";

function Modal({ camera, setOpenModal, url }) {
  const playerRef = React.useRef();

  useEffect(() => {
    function fireOnVideoStart() {
      // Do some stuff when the video starts/resumes playing
    }

    playerRef.current.addEventListener("play", fireOnVideoStart);

    return playerRef.current.removeEventListener("play", fireOnVideoStart);
  }, []);

  useEffect(() => {
    function fireOnVideoEnd() {
      // Do some stuff when the video ends
    }

    playerRef.current.addEventListener("ended", fireOnVideoEnd);

    return playerRef.current.removeEventListener("ended", fireOnVideoEnd);
  }, []);

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
          <ReactHlsPlayer width={768} height={432} playerRef={playerRef} src={url} autoPlay />
          {/* <ReactPlayer url={url} /> */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
