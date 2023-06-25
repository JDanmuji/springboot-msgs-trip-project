import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import styles from "../../pages/login/LoginMain.module.css";
import { useGoogleLogin } from "react-google-login";
import axios from "axios";

const GoogleButton = () => {
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
                onSuccess={(res) => console.log(res, "성공")}
                onFailure={(res) => console.log(res, "실패")}
                render={(renderProps) => (
                    <button
                        className={styles["google-icon"]}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/images/google_btn.png"
                            }
                            alt="Google Icon"
                        ></img>
                    </button>
                )}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleButton;
