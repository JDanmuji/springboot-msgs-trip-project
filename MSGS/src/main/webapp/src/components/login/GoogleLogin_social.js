import React from "react";

import styles from "../../pages/login/LoginMain.module.css";
import { useGoogleLogin } from "react-google-login";
import axios from "axios";
const GoogleLogin_social = () => {
    const googleSocialLogin = useGoogleLogin({
        scope: "email profile",
        onSuccess: async ({ code }) => {
            axios
                .post("http://localhost:3000/auth/google/callback", { code })
                .then(({ data }) => {
                    console.log(data);
                });
        },
        onError: (errorResponse) => {
            console.error(errorResponse);
        },
        flow: "auth-code",
    });

    return (
        <div>
            <div>
                <span onClick={googleSocialLogin}>Google Button</span>
            </div>
        </div>
    );
};

export default GoogleLogin_social;
