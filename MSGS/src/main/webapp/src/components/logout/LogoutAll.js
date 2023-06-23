import React, { useState } from "react";
import LogoutModal from "./LogoutModal";

const LogoutAll = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <span onClick={onOpen}>로그아웃</span>
            {isOpen && (
                <LogoutModal
                    onClose={onClose}
                    changeLoginHandler={props.changeLoginHandler}
                />
            )}
        </div>
    );
};

export default LogoutAll;
