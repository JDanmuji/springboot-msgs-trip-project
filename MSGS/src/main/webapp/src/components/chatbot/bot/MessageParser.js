import React, {useEffect, useState} from 'react';
import {Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";

const MessageParser = ({ children, actions }) => {
    const [stompClient, setStompClient] = useState(null);
    const [firstMessageSent, setFirstMessageSent] = useState(false);

    useEffect((message) => {
        const client = Stomp.over(() => {
            return new SockJS("http://localhost:8080/ws");
            //     return new WebSocket('ws://localhost:8080/ws')
        });
        setStompClient(client);

    }, []);
    const parse = (message) => {
        console.log(message);
        // connect
        if (!firstMessageSent) {
            // actions.stompConnect(stompClient, message);
            setFirstMessageSent(true);
        } else {
            actions.sendMessage(stompClient, message);
        }

    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                });
            })}
        </div>
    );
};

export default MessageParser;

