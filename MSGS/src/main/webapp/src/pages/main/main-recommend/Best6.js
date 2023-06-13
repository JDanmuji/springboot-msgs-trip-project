import React from "react";

import styles from "./MainRecommend.module.css";
import Best6Item from "./Best6Item";

const Best6 = () => {
    const best6Data = [
        { rank: 1 },
        { rank: 2 },
        { rank: 3 },
        { rank: 4 },
        { rank: 5 },
        { rank: 6 },
    ];

    return (
        <section className={styles["section-best-6"]}>
            <h3>인기 급상승</h3>
            <h3>국내 여행지 BEST 6</h3>
            <div className={styles["best-6-items"]}>
                {best6Data.map((data) => (
                    <Best6Item key={data.rank} rank={data.rank} />
                ))}
            </div>
        </section>
    );
};

export default Best6;
