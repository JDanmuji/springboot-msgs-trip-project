import { GoogleLogin } from "@react-oauth/google";
import { gapi } from "gapi-script";
import React from "react";
import { useEffect } from "react";

const clientId = "clientID";
const GoogleButton = ({ onSocial }) => {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId,
                scope: "email",
            });
        }
        gapi.load("client:auth2", start);
    }, []);

    const onSuccess = (response) => {
        console.log(response);
    };

    const onFailure = (response) => {
        console.log(response);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                img
                src={process.env.PUBLIC_URL + "/images/google_btn.png"}
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </div>
    );
};

export default GoogleButton;
