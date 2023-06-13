import React from "react";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
            <header className={styles["header"]}>
                <a href="">
                    <img
                        className={styles["logo"]}
                        src="public/images/msgs_logo.png"
                    />
                </a>
                <nav className={styles["main-nav"]}>
                    <a href="">여행 일정</a>
                    <a href="">여행 이야기</a>
                    <a href="">로그인</a>
                </nav>
            </header>
        </>
    );
};

export default Header;
