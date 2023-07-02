import React, {useEffect, useState} from 'react';
import {Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    // const stompConnect = (stompClient, message) => {
    //     stompClient.connect(
    //         {},
    //         (frame) => {
    //             console.log("Connected: " + frame);
    //             stompClient.subscribe("/topic/public", (message) => {
    //                 console.log("받은 메시지: " + message.body);
    //             });
    //         },
    //         (err) => {
    //             console.log(err);
    //         }
    //     );
    // };

    const sendMessage = (stompClient, message) => {
        stompClient.send("/app/sendMessage", {}, JSON.stringify(message));
    };

    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        // stompConnect,
                        sendMessage,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;