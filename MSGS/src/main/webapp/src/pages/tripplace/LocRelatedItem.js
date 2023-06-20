import React from "react";

import styles from "./LocRelated.module.css";

const LocRelatedItem = (props) => {
    const data = props.data;

    return (
        <li className={styles["related-item"]}>
            <div className={styles["related-img-wrap"]}>
                <img
                    className={styles["related-img"]}
                    src={data.locThumbnail}
                    alt={data.locName}
                />
                <button className={styles["heart-icon-btn"]}>
                    <img
                        src="https://assets.triple.guide/images/btn-content-scrap-overlay-off@3x.png"
                        alt="heart icon"
                        className={styles["heart-icon"]}
                    />
                </button>
            </div>

            <span className={styles["related-img-title"]}>{data.locName}</span>
            <span className={styles["related-img-conf"]}>{data.locType}</span>
            <span className={styles["related-img-addr"]}>{data.locAddr}</span>
        </li>
    );
};

export default LocRelatedItem;
