import React from "react";

import styles from "./StickyBanner.module.css";

const StickyBannerPlan = (props) => {
    const today = new Date();
    const timeDiff = props.data.startDate.getTime() - today.getTime();
    const dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) * -1;

    const startMonth = props.data.startDate.getMonth() + 1;
    const startDate = props.data.startDate.getDate();
    const startWeekday = props.data.startDate.toLocaleDateString("ko-KR", {
        weekday: "short",
    });
    const endMonth = props.data.endDate.getMonth() + 1;
    const endDate = props.data.endDate.getDate();
    const endWeekday = props.data.endDate.toLocaleDateString("ko-KR", {
        weekday: "short",
    });

    return (
        <div className={styles["banner-plan"]}>
            <div className={styles["plan-destination"]}>
                <img />
                <div>
                    <span>{props.data.destination}</span>
                    <span>
                        D{dDay < 0 ? dDay : dDay === 0 ? "-day" : `+${dDay}`}
                    </span>
                </div>
            </div>
            <span className={styles["plan-date"]}>
                {startMonth}.{startDate}({startWeekday}) - {endMonth}.{endDate}(
                {endWeekday})
            </span>
        </div>
    );
};

export default StickyBannerPlan;
