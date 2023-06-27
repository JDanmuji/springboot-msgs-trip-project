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
            <Link to={"/"}>
                {/* <img
                    className={styles["logo"]}
                    src={`${process.env.PUBLIC_URL}/images/common/msgs_logo.png`}
                /> */}
                <span className={styles["logo"]}>마실가실</span>
            </Link>
            <nav className={styles["main-nav"]}>
                <Link to={"/tripschedule1"}>여행 일정</Link>
                <Link to={"/tripstory"}>여행 이야기</Link>
                {/* <Link to={"/login"}>로그인</Link>
                <span onClick={onOpen}>로그아웃</span> */}

                {isLogIn ? (
                    <LogoutAll changeLoginHandler={changeLoginHandler} />
                ) : (
                    <Link to="/login">
                        <span>로그인</span>
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
