import React, { useState, useEffect } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

const WebSocketComponent = () => {
    const [stompClient, setStompClient] = useState(null);
    const [connected, setConnected] = useState(false);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const socket = new SockJS("/ws");
    const client = Stomp.over(socket);

    // useEffect(() => {
    //     const socket = new SockJS("/ws");
    //     const client = Stomp.over(socket);
    //
    //     setStompClient(client);
    //     return () => {
    //         if (socket.readyState === 1) { // <-- This is important
    //             socket.close();
    //         }
    //     };
    //
    // }, []);

    // const connect = () => {
    //     stompClient.connect(
    //         {},
    //         (frame) => {
    //             setConnected(true);
    //             console.log("Connected: " + frame);
    //             stompClient.subscribe("/topic/public", (message) => {
    //                 showMessage("받은 메시지: " + message.body);
    //              });
    //         }
    //     );
    // };

    const connect = () => {
        try {
            client.debug = null;
            //웹소켓 연결시 stomp에서 자동으로 connect이 되었다는것을
            //console에 보여주는데 그것을 감추기 위한 debug

            client.connect({}, () => {
                client.subscribe(
                    `/topic/public`,
                    (data) => {
                        const newMessage = JSON.parse(data.body);
                        //데이터 파싱
                    },
                    {}
                );
            });
        } catch (err) {

        }
    };

    const disconnect = () => {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        setConnected(false);
        console.log("Disconnected");
    };

    const sendMessage = () => {
        showMessage("보낸 메시지: " + message);
        stompClient.send("/app/sendMessage", {}, JSON.stringify(message));
    };

    const showMessage = (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage();
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
                        <td>{msg}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};


export default WebSocketComponent;
