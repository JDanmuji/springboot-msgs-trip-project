import React from "react";
import styles from "./Stay.module.css";

const StayItem = (props) => {
    const item = props.item;

    // 이미지 엑박 뜰 경우 로고로 대체
    const imgErrorHandler = (event) => {
        event.target.src = `${process.env.PUBLIC_URL}/images/common/msgs_logo_margin.png`;
        event.target.style.width = "32rem";
    };

    return (
        <div className={styles["stay-item"]}>
            <img
                className={styles["thumbnail-img"]}
                src={item.firstimage}
                onError={imgErrorHandler}
                alt={item.title}
            />

            <div className={styles["text-area"]}>
                <h3 className={styles["stay-title"]}>{item.title}</h3>
                <p className={styles["stay-addr"]}>{item.addr1}</p>
                <p className={styles["stay-tel"]}>{item.tel}</p>
            </div>

            {/* <p>{item.areacode}</p> */}
            {/* <p>{item.mapx}</p>
                        <p>{item.mapy}</p> */}
            {/* <img src={item.firstimage} width={100} /> */}
        </div>
    );
};

export default StayItem;
