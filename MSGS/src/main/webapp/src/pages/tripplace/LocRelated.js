import React from "react";

import styles from "./LocRelated.module.css";

import LocRelatedItem from "./LocRelatedItem";

const LocRelated = () => {
    const dummyData = Array(6).fill({
        locId: "L1",
        locThumbnail:
            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/76edd887-d410-493b-8128-13d504ca5b0c.jpeg",
        locName: "전동 성당",
        locType: "관광명소",
        locAddr: "전북 전주시",
    });

    return (
        <div className={styles["related-wrap"]}>
            <h2 className={styles["related-title"]}>이곳과 함께 본 장소</h2>

            <ul className={styles["related-list"]}>
                {dummyData.map((data, index) => (
                    <LocRelatedItem key={index} data={data} />
                ))}
            </ul>
        </div>
    );
};

export default LocRelated;
