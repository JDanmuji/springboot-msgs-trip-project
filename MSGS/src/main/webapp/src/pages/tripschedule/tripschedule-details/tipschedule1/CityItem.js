import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import styles from "./FamousCity.module.css"

const CityItem = (props) => {

    const imgClassName = props.isSelected
        ? `${styles["city-img-container"]} ${styles["city-img-selected"]}`
        : styles["city-img-container"];

    return (
        <div className={styles["city-container"]}
             onClick={() => props.imgClick(props.data.areaId)}>
            <div className={imgClassName}>
                <img src={props.data.imageUrl} className={styles["city-img"]} />
            </div>
            <div className={styles["city-title"]}>
                {ReactHtmlParser(props.data.areaTitle)}
            </div>
        </div>
    );
};

export default CityItem;