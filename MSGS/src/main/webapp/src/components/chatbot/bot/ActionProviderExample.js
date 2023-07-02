// import React, {useEffect, useState} from 'react';
// import {Stomp} from "@stomp/stompjs";
// import SockJS from "sockjs-client";
//
// const ActionProvider = ({ createChatBotMessage, setState, children }) => {
//     const sendMessage = (message) => {
//
//         stompClient.send("/app/sendMessage", {}, JSON.stringify(message));
//
//         const botMessage = createChatBotMessage('보냈다'+ message);
//
//         setState((prev) => ({
//             ...prev,
//             messages: [...prev.messages, botMessage],
//         }));
//     };
//
//     // const handleHello = () => {
//     //     const botMessage = createChatBotMessage('Hello. Nice to meet you.');
//     //
//     //     setState((prev) => ({
//     //         ...prev,
//     //         messages: [...prev.messages, botMessage],
//     //     }));
//     // };
//
//     // Put the handleHello function in the actions object to pass to the MessageParser
//     return (
//         <div>
//             {React.Children.map(children, (child) => {
//                 return React.cloneElement(child, {
//                     actions: {
//                         sendMessage,
//                     },
//                 });
//             })}
//         </div>
//     );
// };
//
// export default ActionProvider;