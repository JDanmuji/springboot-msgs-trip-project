import React, {useEffect, useState} from 'react';

import Chatbot, {createChatBotMessage} from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from './bot/config.js';
import MessageParser from './bot/MessageParser.js';
import ActionProvider from './bot/ActionProvider.js';

import "remixicon/fonts/remixicon.css";
import "./ChatModal.css";
import {Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";


const ChatModal = () => {
    const [stompClient, setStompClient] = useState(null);

    useEffect(() => {
        const client = Stomp.over(() => {
            return new SockJS("http://localhost:8080/ws");
        });

        setStompClient(client);

    }, []);
    useEffect(() => {
        stompClient.connect(
            {},
            (frame) => {
                console.log("Connected: " + frame);
                stompClient.subscribe("/topic/public", (message) => {
                    console.log("받은 메시지: " + message.body);
                });
            },
            (err) => {
                console.log(err);
            }
        );
    }, [stompClient])



    return (
        <>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                stompClient={stompClient}
            />
        </>
    );
};

export default ChatModal;
