import React, { useState } from "react";

import styles from "./Header.module.css";
import LogoutModal from "../logout/LogoutModal";
import LogoutAll from "../logout/LogoutAll";
import { Link } from "react-router-dom";

const Header = () => {
    const [isLogIn, setIsLogIn] = useState(false);

    const changeLoginHandler = (data) => {
        setIsLogIn(data);
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
                {isLogIn ? (
                    <LogoutAll changeLoginHandler={changeLoginHandler} />
                ) : (
                    <Link to="/login">
                        <span onClick={() => setIsLogIn(true)}>로그인</span>
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
