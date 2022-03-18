// import React, { useState } from "react";
import "./Chat.scss";
import Chatbot from "react-chatbot-kit";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";

const Chat = () => {
  // const [isToggle, setIsToggle] = useState(true);

  // const { messages, sendMessage } = useState([]);
  // const [newMessage, setNewMessage] = useState("");

  // const handleNewMessageChange = (event) => {
  //   const value = event.target.value;
  //   setNewMessage(value);
  // };
  // const handleSendMessage = () => {
  //   sendMessage(newMessage);
  //   setNewMessage("");
  // };

  // const handleClick = () => {
  //   setIsToggle(false);
  // };
  // const handle = () => {
  //   setIsToggle(true);
  // };

  return (
    <div className="chatbot" >
      <div style={{ maxWidth: "300px" }}>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
      {/* <>
      {isToggle === true ? (
        <button className="boton" onClick={handleClick}>
          chat
        </button>
      ) : (
        <div className="target">
          <div className="header">
            <h3>Nombre</h3>
            <button onClick={handle}> - </button>
          </div>
          <div className="estado">
            <p>En linea</p>
          </div>
          <div className="chat">
            <p>esto es un ejemplo</p>
          
          </div>
          <div className="textarea">
            <textarea
              placeholder="Escribe aqui tu mensaje"
              cols="30"
              rows="4"
              value={newMessage}
              onChange={handleNewMessageChange}
            ></textarea>
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
          <div className="iconos"></div>
        </div>
      )}
    </> */}
    </div>
  );
};

export default Chat;
