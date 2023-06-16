import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import React, { useEffect } from "react";

const GoogleButton = () => {
    const clientId = "481356857230-fi1dds6243ihciqg9a1g9q27e7qkvkr2.apps.googleusercontent.com";

    const onSuccess = async ({ code }) => {
        try {
            const response = await axios.post("http://localhost:3000/login", { code });
            console.log(response.data);
            // if (response.data === "true") {
            //   alert("로그인 성공");
            // }
        } catch (error) {
            console.log(error);
        }
    };

    const onFailure = (response) => {
        console.log(response, "실패");
    };

    const googleSocialLogin = useGoogleLogin({
        clientId: clientId,
        onSuccess: onSuccess,
        onFailure: onFailure,
        scope: "email profile",
        flow: "authCode",
    });

    return (
        <div>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    clientId={clientId}
                    onSuccess={(res) => console.log(res, "성공")}
                    onFailure={(res) => console.log(res, "실패")}
                    render={(renderProps) => (
                        <li className="google-icon" onClick={renderProps.onClick}>
                            <img src={process.env.PUBLIC_URL + "/images/google_btn.png"} />
                        </li>
                    )}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default GoogleButton;
