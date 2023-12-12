import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const WebSocketPlayer = () => {
  const [socket, setSocket] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");

  const canvasRef = React.useRef(null);

  // useEffect(() => {
  //   fetch("http://localhost:5000/camera1", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const wsUrl = data.url;
  //       const newSocket = new WebSocket(wsUrl);

  //       newSocket.addEventListener("open", () => {
  //         console.log("WebSocket connection opened");
  //       });

  //       newSocket.addEventListener("message", async (event) => {
  //         console.log(event);
  //         const canvas = canvasRef.current;
  //         const context = canvas.getContext("2d");
  //         const blob = event.data;

  //         const reader = new FileReader();
  //         reader.onload = (event) => {
  //           const imageData = event.target.result
  //           const img = new Image();
  //           img.onload = () => {
  //             context.drawImage(img, 0, 0, canvas.width, canvas.height);
  //           };
  //           img.src = imageData;
  //         };
  //         reader.readAsDataURL(blob);
  //         // setVideoUrl(event.origin);
  //       });

  //       newSocket.addEventListener("close", () => {
  //         console.log("WebSocket connection closed");
  //       });

  //       setSocket(newSocket);

  //       // Cleanup WebSocket connection on component unmount
  //       return () => {
  //         newSocket.close();
  //       };
  //     });
  // }, [videoUrl]);

  return (
    <div>
      <h1>WEBSOCKET</h1>
      {videoUrl && (
        <ReactPlayer
          url="http://localhost:9000//video_capture"
          controls={true}
          width="100%"
          height="100%"
        />
      )}
      {/* <canvas ref={canvasRef} width={800} height={600} /> */}
    </div>
  );
};

export default WebSocketPlayer;
