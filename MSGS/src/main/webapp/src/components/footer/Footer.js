import React from "react";
import { useLocation} from 'react-router-dom'
import styles from "./Footer.module.css";

const Footer = () => {
    const publicUrl = process.env.PUBLIC_URL;
    const imagePath = {
        msgs: `${publicUrl}/images/common/msgs_logo.png`,
        github: `${publicUrl}/images/common/github_logo.png`,
        notion: `${publicUrl}/images/common/notion_logo.png`,
    };

    const location = useLocation()

    if (location.pathname === '/tripSchedule') return null
    if (location.pathname.startsWith('/tripSchedule/edit')) return null

    return (
        <footer className={styles["footer"]}>
            <div className={styles["social-list"]}>
                <img className={styles["msgs-logo"]} src={imagePath.msgs} />
                <div className={styles["social-media"]}>
                    <span>
                        <strong>마실가실 프로젝트 페이지</strong>
                    </span>
                    <div className={styles["social-media-icons"]}>
                        <a href="">
                            <span>GITHUB</span>
                            <img src={imagePath.github} />
                        </a>
                        <a href="">
                            <span>NOTION</span>
                            <img src={imagePath.notion} />
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
