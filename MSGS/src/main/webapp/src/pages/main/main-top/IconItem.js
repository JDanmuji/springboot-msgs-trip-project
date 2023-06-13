import React from "react";

import styles from "./MainTop.module.css";

const IconItem = (props) => {
    const iconSrc = `public/images/main/${props.icon}.png`;

    return (
        <a className={styles["icon-menu-item"]} href="">
            <img className={styles["icon-img"]} src={iconSrc} />
            <p className={styles["icon-menu-text"]}>{props.menuText}</p>
        </a>
    );
};

export default IconItem;
