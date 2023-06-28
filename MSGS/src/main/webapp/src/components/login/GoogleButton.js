import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import styles from "../../pages/login/LoginMain.module.css";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const onSuccess = async (credentialResponse) => {
        console.log(credentialResponse);
        let userObject = jwtDecode(credentialResponse.credential);
        setUser(userObject.email);
        console.log(userObject);
        console.log(userObject.email);

        const response = await fetch(`/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: userObject.email,
            }),
        });

        const data = await response.json();
        const token = data.accessToken;
        console.log("data 확인: ", data);
        console.log("토큰 확인: ", token);
        Cookies.set("token", token, { expires: 1 });

        const tokenValue = Cookies.get("token");

        // Check if the 'token' cookie exists and log its value
        if (tokenValue) {
            console.log("Token cookie value:", tokenValue);
        } else {
            console.log("Token cookie does not exist or has no value");
        }

        console.log(response);
        if (response.ok) {
            navigate("/");
        } else {
            alert("회원가입이 필요합니다.");
            navigate("/signup1", {
                state: {
                    dataSnsEmail: userObject.email,
                    dataSnsType: "G",
                    dataPassword: "123",
                },
            });
        }
    };
    const onFailure = (res) => console.log(res, "실패");
    return (
        <GoogleOAuthProvider
            clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        >
            <GoogleLogin
                clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleButton;
