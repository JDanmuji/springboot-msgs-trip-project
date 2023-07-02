import React, {useEffect, useState} from 'react';
import {Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";

const MessageParser = ({ children, actions }) => {

    const parse = (message) => {
        if (message.includes('장소')&&message.includes("추천")) {
            actions.handleRecommend();
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

