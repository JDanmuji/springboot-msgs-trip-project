import React, { useState } from "react";

import styles from "./Header.module.css";
import LogoutModal from "../logout/LogoutModal";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <header className={styles["header"]}>
            <a href="/">
                <img
                    className={styles["logo"]}
                    src={`${process.env.PUBLIC_URL}/images/common/msgs_logo.png`}
                />
            </a>
            <nav className={styles["main-nav"]}>
                <a href="/tripschedule1">여행 일정</a>
                <a href="/tripstory">여행 이야기</a>
                <a href="/login">로그인</a>
                <span onClick={onOpen}>로그아웃</span>
                {isOpen && <LogoutModal onClose={onClose} />}
            </nav>
        </header>
    );
};

export default Header;
