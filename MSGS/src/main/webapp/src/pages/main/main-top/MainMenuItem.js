import React from "react";

import styles from "./MainTop.module.css";
import { Link } from "react-router-dom";

const MainMenuItem = (props) => {
    return (
        <Link className={styles["main-menu-item"]} to={props.to}>
            <div className={styles["main-menu-img-wrap"]}>
                <img
                    className={styles["main-menu-img"]}
                    src={`${process.env.PUBLIC_URL}/images/main/${props.img}`}
                />
            </div>
            <div className={styles["main-menu-text"]}>
                <h3>{props.title}</h3>
                <p>{props.desc1}</p>
                <p>{props.desc2}</p>
            </div>
        </Link>
    );
};

export default MainMenuItem;
