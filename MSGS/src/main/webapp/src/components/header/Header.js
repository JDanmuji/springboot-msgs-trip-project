import React from "react";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles["header"]}>
            <a href="/">
                <img
                    className={styles["logo"]}
                    src={`${process.env.PUBLIC_URL}/images/common/msgs_logo.png`}
                />
            </a>
            <nav className={styles["main-nav"]}>
                <a href="/tripSchedule">여행 일정</a>
                <a href="/tripstory">여행 이야기</a>
                <a href="/login">로그인</a>
            </nav>
        </header>

    );
};

export default Header;
