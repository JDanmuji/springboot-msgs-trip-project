import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Stay.module.css";

const StayItem = (props) => {
    const item = props.item;
    const [isImageExist, setIsImageExist] = useState(true);

    // 이미지 엑박 뜰 경우 로고로 대체
    const imgErrorHandler = (event) => {
        event.target.src = `${process.env.PUBLIC_URL}/images/common/msgs_logo_margin.png`;
        event.target.style.width = "32rem";
        setIsImageExist(false);
    };

    // 너무 긴 제목 축약
    const shortedTitle =
        item.title.length > 12
            ? item.title.substring(0, 12) + "..."
            : item.title;

    // // 다음 페이지로 데이터 보냄
    // const navigate = useNavigate();
    // const convey = () => {
    //     navigate(`/staydetail/${item.contentid}`, {
    //         state: {
    //             title: item.title,
    //             mapX: item.mapx,
    //             mapY: item.mapy,
    //             // 상세페이지에서 이미지 있을 때만 출력하도록 조건 걸어줌
    //             firstImage: isImageExist ? item.firstimage : false,
    //         },
    //     });
    // };

    return (
        <Link to={`/staydetail/${item.contentid}`}>
            <div className={styles["stay-item"]}>
                <img
                    className={styles["thumbnail-img"]}
                    src={item.firstimage}
                    onError={imgErrorHandler}
                    alt={item.title}
                />

                <div className={styles["text-area"]}>
                    <h3 className={styles["stay-title"]}>{shortedTitle}</h3>
                    <p className={styles["stay-addr"]}>{item.addr1}</p>
                    <p className={styles["stay-tel"]}>{item.tel}</p>
                </div>
            </div>
        </Link>
    );
};

export default StayItem;
