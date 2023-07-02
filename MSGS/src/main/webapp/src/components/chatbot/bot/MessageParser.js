import React, {useEffect, useState} from 'react';
import {Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";

const MessageParser = ({ children, actions }) => {

    const parse = (message) => {
        if (message.includes('장소')&&message.includes("추천")) {
            actions.handleRecommend();
        }
        else if (message.includes('마실가실')&&message.includes("어떤")&&message.includes("사이트")) {
            actions.meanMsgs();
        }
        else if (message.includes('울고싶을땐 어떻게 해')) {
            actions.crying();
        }
        else if (message.includes('뭐해')) {
            actions.whatIs();
        }
        else (actions.empty())

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

