import React from 'react';
import './ChatMessage.css';

function ChatMessage({ message, bot }) {
    const messageClass = bot ? 'chatMessageContainer bot' : 'chatMessageContainer user';

    return <div className={messageClass}>{message}</div>;
}

export default ChatMessage;