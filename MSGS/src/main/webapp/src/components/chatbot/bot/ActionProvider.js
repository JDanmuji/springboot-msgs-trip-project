import React, {useEffect, useState} from 'react';
import {Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleRecommend = () => {
        const botMessage = createChatBotMessage('국내여행 떠나보시는 것 어떤가요?') + createChatBotMessage('아래 링크로 이동하여 원하시는 장소와 숙소를 찾아보세요~~');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleRecommend,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;