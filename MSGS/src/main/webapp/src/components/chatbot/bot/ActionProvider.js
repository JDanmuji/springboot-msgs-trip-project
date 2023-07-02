import React, {useEffect, useState} from 'react';
import {Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleRecommend = () => {
        const botMessage = createChatBotMessage('국내여행 떠나보시는 것 어떤가요?')

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };
    const meanMsgs = () => {
        const botMessage = createChatBotMessage('국내를 겨냥한 여행 일정 사이트로 국내 여행 일정을 기반으로 여행 일정, 맛집, 숙박시설, 항공권 및 버스 승차권에 대한 정보를 확인해보실 수 있습니다~')

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const crying = () => {
        const botMessage = createChatBotMessage('눈물을 억지로 참진 말아요.')

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }
    const whatIs = () => {
        const botMessage = createChatBotMessage('당신을 기다리고 있었어요.')

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const empty = () => {
        const botMessage = createChatBotMessage('잘 이해하지 못했습니다. 다시 설명해주세요')

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleRecommend,
                        meanMsgs,
                        crying,
                        whatIs,
                        empty

                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;