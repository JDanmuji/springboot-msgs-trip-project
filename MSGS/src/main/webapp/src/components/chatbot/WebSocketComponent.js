import React, { useState, useEffect } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

const WebSocketComponent = () => {
    const [stompClient, setStompClient] = useState(null);
    const [connected, setConnected] = useState(false);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");


    useEffect(() => {
        const client = Stomp.over(() => {
            return new SockJS("http://localhost:8080/ws");
        //     return new WebSocket('ws://localhost:8080/ws')
        });

        setStompClient(client);
    }, []);

    const connect = () => {
        setConnected(true);
        stompClient.connect(
            {},
            (frame) => {
                console.log("Connected: " + frame);
                stompClient.subscribe("/topic/public", (message) => {
                    showMessage("받은 메시지: " + message.body);
                });
            },
            (err) => {
                console.log(err);
            }
        );
    };

    const disconnect = () => {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        setConnected(false);
        console.log("Disconnected");
    };

    const sendMessage = () => {
        // 현재 Stomp 클라이언트가 연결된 상태인지 확인합니다.
        if (stompClient && stompClient.connected) {
            showMessage("보낸 메시지: " + message);
            stompClient.send("/app/sendMessage", {}, JSON.stringify(message));
        } else {
            console.error("STOMP 연결이 존재하지 않습니다.");
        }
    };

    const showMessage = (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div>
                {!connected ? (
                    <button onClick={connect} disabled={connected}>
                        Connect
                    </button>
                ) : (
                    <button onClick={disconnect} disabled={!connected}>
                        Disconnect
                    </button>
                )}
            </div>

            <div style={{ display: connected ? "block" : "none" }}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{border: "1px solid red"}}
                    />

                    <button onClick={sendMessage} disabled={!connected}>
                        Send
                    </button>
                </form>
            </div>

            <table>
                <tbody>
                {messages.map((msg, index) => (
                    <tr key={index}>
                        <td style={{fontSize:"1.4rem"}}>{msg}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};


export default WebSocketComponent;
