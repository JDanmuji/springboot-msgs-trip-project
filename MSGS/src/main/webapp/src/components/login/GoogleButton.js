import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import styles from "../../pages/login/LoginMain.module.css";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleButton = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const onSuccess = async (credentialResponse) => {
        console.log(credentialResponse);
        let userObject = jwtDecode(credentialResponse.credential);
        setUser(userObject.email);
        console.log(userObject);
        console.log(userObject.email);

        try {
            const response = await axios.post(
                `/user/getUserInfo?email=${user}`,
                {
                    email: user,
                }
            );

            if (response.ok) {
                const data = await response.data;
                const userType = data.userId.charAt(0);

                console.log("타입 확인:", userType);
                console.log("이미 가입된 회원이 있습니다.: " + data);

                if (userType === "G") {
                    try {
                        const loginResponse = await axios.post(`/users/login`, {
                            email: user,
                            password: "123",
                        });

                        const token = loginResponse.data.accessToken;
                        console.log("data 확인: ", loginResponse.data);
                        console.log("토큰 확인: ", token);
                        Cookies.set("token", token, { expires: 1 });

                        const tokenValue = Cookies.get("token");

                        if (tokenValue) {
                            console.log("Token cookie value:", tokenValue);
                        } else {
                            console.log(
                                "Token cookie does not exist or has no value"
                            );
                        }

                        console.log(loginResponse);

                        if (loginResponse.ok) {
                            navigate("/");
                        }
                    } catch (err) {
                        console.log("서버 통신 에러 발생: " + err);
                    }
                } else if (userType === "K") {
                    alert(
                        "카카오로 가입된 이메일입니다. 카카오로 로그인하시기 바랍니다."
                    );
                    navigate("/login");
                } else if (userType === "N") {
                    alert(
                        "네이버로 가입된 이메일입니다. 네이버로 로그인하시기 바랍니다."
                    );
                    navigate("/login");
                } else if (userType === "M") {
                    alert(
                        "일반 회원으로 가입된 이메일입니다. 이메일로 로그인하시기 바랍니다."
                    );
                    navigate("/login");
                }
            } else {
                alert("회원가입이 필요합니다.");
                navigate("/signup1", {
                    state: {
                        dataSnsEmail: user,
                        dataSnsType: "G",
                        dataPassword: "123",
                    },
                });
            }
        } catch (err) {
            console.log("서버 통신 에러 발생: " + err);
        }

        // const response = await fetch(`/users/login`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         email: userObject.email,
        //     }),
        // });

        // const data = await response.json();
        // const token = data.accessToken;
        // console.log("data 확인: ", data);
        // console.log("토큰 확인: ", token);
        // Cookies.set("token", token, { expires: 1 });

        // const tokenValue = Cookies.get("token");

        // // Check if the 'token' cookie exists and log its value
        // if (tokenValue) {
        //     console.log("Token cookie value:", tokenValue);
        // } else {
        //     console.log("Token cookie does not exist or has no value");
        // }

        // console.log(response);
        // if (response.ok) {
        //     navigate("/");
        // } else {
        //     alert("회원가입이 필요합니다.");
        //     navigate("/signup1", {
        //         state: {
        //             dataSnsEmail: userObject.email,
        //             dataSnsType: "G",
        //             dataPassword: "123",
        //         },
        //     });
        // }
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
