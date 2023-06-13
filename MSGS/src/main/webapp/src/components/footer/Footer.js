import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["social-list"]}>
                <img
                    className={styles["msgs-logo"]}
                    src="public/images/common/msgs_logo.png"
                />
                <div className={styles["social-media"]}>
                    <span>
                        <strong>마실가실 프로젝트 페이지</strong>
                    </span>
                    <div className={styles["social-media-icons"]}>
                        <a href="">
                            <span>GITHUB</span>
                            <img src="public/images/common/github_logo.png" />
                        </a>
                        <a href="">
                            <span>NOTION</span>
                            <img src="public/images/common/notion_logo.png" />
                        </a>
                    </div>
                </div>
            </div>

            <p className={styles["copyright"]}>
                Copyright © 2023 by Team Little Nine. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
