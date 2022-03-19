// import React, { useState } from "react";
import { useState } from "react";
import "./Chat.scss";


const Chat = () => {
  

  const [openChat, setOpenChat] = useState();

  return (
    <div className="chatbox">
    { openChat && <div className="chatbox__chat">
      <iframe title="chatbot" width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/60a50e94-4299-4cb8-a769-d93e9697ffaa"></iframe>
    </div>}
    <button className="chatbox__button" onClick={()=>{setOpenChat(!openChat)}}>Chat</button>
    </div>
  )

};

export default Chat;





