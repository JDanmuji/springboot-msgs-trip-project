import React, { useState } from "react";
import LogoutModal from "./LogoutModal";
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

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
            <span onClick={onOpen}>로그아웃</span>
            {isOpen && (
                <LogoutModal
                    setIsToken={props.setIsToken}
                    onClose={onClose}
                    changeLoginHandler={props.changeLoginHandler}
                />
            )}
        </div>
    );
};

export default LogoutAll;
