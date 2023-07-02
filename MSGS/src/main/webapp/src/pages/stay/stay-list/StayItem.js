import React from "react";
import { Link } from "react-router-dom";
import styles from "./Stay.module.css";

const StayItem = (props) => {
    const item = props.item;
    // console.log(item);

    // 이미지 엑박 뜰 경우 로고로 대체
    // (데이터 있으나 url이 부정확해 로딩되지 않는 경우)
    const imgErrorHandler = (event) => {
        event.target.src = `${process.env.PUBLIC_URL}/images/common/msgs_logo_margin.png`;
        event.target.style.width = "32rem";
    };

    // 너무 긴 제목 축약
    const shortedTitle =
        item.title.length > 12
            ? item.title.substring(0, 12) + "..."
            : item.title;

    return (
        // <Link to={`/staydetail/${item.pageNo}/${item.contentid}`}>
        <Link to={`/staydetail/${item.areacode}/32/${item.contentid}`}>
            <div className={styles["stay-item"]}>
                <img
                    className={styles["thumbnail-img"]}
                    src={item.firstimage}
                    onError={imgErrorHandler}
                    alt={item.title}
                />

                <div className={styles["text-area"]}>
                    <h3 className={styles["stay-title"]}>{shortedTitle}</h3>
                    <div className={styles["stay-addr-tel"]}>
                        {/* <img
                            src={`${process.env.PUBLIC_URL}/images/icon_location.png`}
                        /> */}
                        <span>{item.addr1}</span>
                    </div>
                    <div className={styles["stay-addr-tel"]}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/stay/icon_phone.png`}
                        />
                        <span>{item.tel}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default StayItem;
