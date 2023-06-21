import React, { useState } from "react";
import axios from "axios";

const TempSmsCheck = () => {
    const [to, setTo] = useState("");

    const buttonHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/user/signup/smscheck", { to });

            if (response.data === "exist") {
                console.log("Phone number already exists");
            } else {
                console.log("Authentication number sent");
            }
        } catch (error) {
            console.log("Error occurred:", error);
        }
    };

    // const buttonHandler = async () => {
    // try {
    //     console.log(to);

    //     const response = await fetch("/user/signup/smscheck", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(to),
    //     });

    //     if (response.ok) {
    //         console.log("문자 발송 성공");
    //     } else {
    //         console.log("문자 발송 실패");
    //     }
    // } catch (error) {
    //     // 네트워크 오류 등 예외 처리
    //     console.log("오류 발생", error);
    // }
    // };

    return (
        <form>
            <input
                type="text"
                name="to"
                placeholder="전화번호"
                value={to}
                onChange={(e) => setTo(e.target.value)}
            />

            <button onClick={buttonHandler}>발송</button>
        </form>
    );
};

export default TempSmsCheck;
