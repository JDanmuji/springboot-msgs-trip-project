import React, { useState } from "react";
import LogoutModal from "./LogoutModal";
import { useNavigate } from "react-router-dom";

const LogoutAll = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* {userID && <h1>{userID}</h1>} */}
            <span style={{ cursor: "pointer" }} onClick={onOpen}>
                로그아웃
            </span>
            {isOpen && (
                <LogoutModal
                    onClose={onClose}
                    loginHandler={props.loginHandler}
                />
            )}
        </div>
    );
};

export default LogoutAll;
