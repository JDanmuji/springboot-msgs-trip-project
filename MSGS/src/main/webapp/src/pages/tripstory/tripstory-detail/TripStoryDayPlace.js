import React from "react";

import styles from "./TripStoryDay.module.css";

import StarShow from "../../../components/common/StarShow";
import ReviewImg from "../../tripplace/ReviewImg";

const TripStoryDayPlace = (props) => {
    const item = props.item;

    return (
        <li className={styles["day-detail-item"]}>
            <div className={styles["place-text"]}>
                <span className={styles["place-order"]}>
                    {item.scheduleOrder}
                </span>
                <div className={styles["white-space"]}></div>

                <div>
                    <h3 className={styles["place-title"]}>{item.title}</h3>
                    <span className={styles["place-subtitle"]}>
                        {item.subtitle}
                    </span>
                    {/* 별점 출력 컴포넌트 */}
                    <StarShow rating={item.rating} height={"1.4rem"} />
                    <p className={styles["place-content"]}>{item.content}</p>
                </div>
            </div>

            {/* 이미지 있을 경우 map 돌림 */}
            {item.img && (
                <ul className={styles["place-img-list"]}>
                    {/* 장소 사진 리스트 - 장소 상세 리뷰란 컴포넌트 끌어옴 */}
                    <ReviewImg reviewImgList={item.img} />
                </ul>
            )}
        </li>
    );
};

export default TripStoryDayPlace;
