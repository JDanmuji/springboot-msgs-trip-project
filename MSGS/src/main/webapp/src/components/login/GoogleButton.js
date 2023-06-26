import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import styles from "../../pages/login/LoginMain.module.css";
import jwtDecode from "jwt-decode";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const GoogleButton = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    // const [cookies, setCookie] = useCookies(["id"]); // 쿠키 훅

    // google_oauth_client = GoogleOAuth2(
    //     (client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID),
    //     (client_secret = Configs.GOOGLE_CLIENT_SECRET),
    //     (scope = [
    //         "https://www.googleapis.com/auth/userinfo.profile", //# 구글 클라우드에서 설정한 scope
    //         "https://www.googleapis.com/auth/userinfo.email",
    //         "openid",
    //     ])
    // );

    // google_oauth_router = fastapi_users.get_oauth_router(
    //     (oauth_client = google_oauth_client),
    //     (backend = auth_backend),
    //     (state_secret = Configs.SECRET_KEY),
    //     (redirect_url = process.env.REACT_APP_REDIRECT_GOOGLE_URL), //# 구글 로그인 이후 돌아갈 URL
    //     (associate_by_email = True)
    // );

    const onSuccess = (credentialResponse) => {
        console.log(credentialResponse);
        let userObject = jwtDecode(credentialResponse.credential);
        setUser(userObject);
        console.log(userObject);
        console.log(user.email);
        navigate("/signup1", {
            state: {
                dataSnsEmail: user.email,
                dataSnsType: "G",
            },
        });
    };

    const onFailure = (res) => console.log(res, "실패");

    // // credential을 로드합니다.
    // const creds = JSON.parse(credential);

    // // 인증을 위한 OAuth2 클라이언트를 생성합니다.
    // const client = new google.auth.OAuth2(
    //     creds.clientId,
    //     creds.clientSecret,
    //     creds.redirectUri
    // );

    // // credential을 설정합니다.
    // client.setCredentials({
    //     access_token: creds.access_token,
    //     refresh_token: creds.refresh_token,
    // });

    // // 유저의 이메일 값을 가져오는 함수를 작성합니다.
    // const getUserEmail = async () => {
    //     try {
    //         // Google API를 사용하여 유저 정보를 가져옵니다.
    //         const res = await google
    //             .people({ version: "v1", auth: client })
    //             .people.get({
    //                 resourceName: "people/me",
    //                 personFields: "emailAddresses",
    //             });

    //         // 이메일 값을 추출합니다.
    //         const email = res.data.emailAddresses[0].value;
    //         console.log(email); // 유저의 이메일 출력
    //     } catch (error) {
    //         console.error("Error retrieving user email:", error);
    //     }
    // };

    // // getUserEmail 함수를 호출하여 유저의 이메일 값을 가져옵니다.
    // getUserEmail();
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
