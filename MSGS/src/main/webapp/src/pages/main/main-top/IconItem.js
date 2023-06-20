import React from "react";

import styles from "./MainTop.module.css";

const IconItem = (props) => {
    return (
        <a className={styles["icon-menu-item"]} href={props.href}>
            <img
                className={styles["icon-img"]}
                src={`${process.env.PUBLIC_URL}/images/main/${props.icon}.png`}
            />
            <p className={styles["icon-menu-text"]}>{props.menuText}</p>
        </a>
    );
};

export default IconItem;
