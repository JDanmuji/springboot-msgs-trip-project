import React from "react";

import styles from "./MainTop.module.css";
import { Link } from "react-router-dom";

const IconItem = (props) => {
    return (
        <Link className={styles["icon-menu-item"]} to={props.to}>
            <img
                className={styles["icon-img"]}
                src={`${process.env.PUBLIC_URL}/images/main/${props.icon}.png`}
            />
            <p className={styles["icon-menu-text"]}>{props.menuText}</p>
        </Link>
    );
};

export default IconItem;
