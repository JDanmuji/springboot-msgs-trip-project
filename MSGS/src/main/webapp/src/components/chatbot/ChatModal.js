import React, { useEffect, useState } from "react";

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./bot/config.js";
import MessageParser from "./bot/MessageParser.js";
import ActionProvider from "./bot/ActionProvider.js";

import "remixicon/fonts/remixicon.css";
import "./ChatModal.css";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const ChatModal = () => {
    const [isChatBot, setIsChatBot] = useState(false);

    const openChatConnect = () => {
        setIsChatBot(!isChatBot);
    };

    return (
        <div>
            <div className="chat-bot-img-wrap" onClick={openChatConnect}>
                <img
                    src={process.env.PUBLIC_URL + "/images/chat_bot_icon.png"}
                    alt=""
                    className="chat-bot-img"
                />
            </div>

            {isChatBot && (
                <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            )}
        </div>
    );
};

export default ChatModal;
