import React from "react";

import styles from "./MainRecommend.module.css";
import cityData from "../../tripschedule/tripschedule-details/tipschedule1/CitiesData.js";

import Best6Item from "./Best6Item";

const Best6 = () => {
    const best6Data = cityData.slice(0, 6);

    return (
        <section className={styles["section-best-6"]}>
            <h3>인기 급상승</h3>
            <h3>국내 여행지 BEST 6</h3>
            <div className={styles["best-6-items"]}>
                {best6Data.map((data) => (
                    <Best6Item
                        key={data.areaId}
                        rank={data.areaId}
                        areaTitle={data.areaTitle}
                        imageUrl={data.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default Best6;
