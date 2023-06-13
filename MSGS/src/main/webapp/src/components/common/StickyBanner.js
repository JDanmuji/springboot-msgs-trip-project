import React from "react";

import styles from "./StickyBanner.module.css";
import StickyBannerPlan from "./StickyBannerPlan";

const StickyBanner = () => {
    const bannerData = [
        {
            destination: "강릉",
            startDate: new Date("2023/06/13"),
            endDate: new Date("2023/06/14"),
        },
        {
            destination: "부산",
            startDate: new Date("2023/07/16"),
            endDate: new Date("2023/07/20"),
        },
    ];

    console.log(bannerData[0].endDate - bannerData[0].startDate);

    return (
        <div className={styles["banner-area"]}>
            <div className={styles["sticky-banner"]}>
                <p className={styles["sticky-banner-title"]}>예정된 여행</p>
                {bannerData.map((data) => (
                    <StickyBannerPlan key={data.memberId} data={data} />
                ))}
            </div>
        </div>
    );
};

export default StickyBanner;
