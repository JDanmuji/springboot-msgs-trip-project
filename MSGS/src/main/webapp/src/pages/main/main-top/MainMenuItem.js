import React from "react";

import styles from "./MainTop.module.css";

const MainMenuItem = (props) => {
    return (
        <a className={styles["main-menu-item"]} href="">
            <img className={styles["main-menu-img"]} />
            <div className={styles["main-menu-text"]}>
                <h3>{props.title}</h3>
                <p>{props.desc1}</p>
                <p>{props.desc2}</p>
            </div>
        </a>
    );
};

export default MainMenuItem;
