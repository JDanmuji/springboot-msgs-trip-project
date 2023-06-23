import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import styles from "../../pages/login/LoginMain.module.css";
import { useGoogleLogin } from "react-google-login";
import axios from "axios";

const GoogleButton = () => {
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
