import React from 'react';
import styles from "./BusTimeList.module.css";
import moment from "moment";

import BusSelectCard from "./modal-item/BusSelectCard";
import TimeListItem from "./modal-item/TimeListItem";

const BusTimeList = (props) => {
    const now = moment();

    return (
        <div className={styles["bus-time-wrap"]}>
            <div className={styles["bus-selected-card"]}>
                <BusSelectCard />
                <BusSelectCard />
            </div>

            <div className={styles["list-header-wrap"]}>
                <div className={styles["list-title"]}>
                    가는편 선택
                </div>
                <div className={styles["list-sub-title-wrap"]}>
                    <span className={styles["list-sub-title"]}>출발지</span>
                    <span className={styles["list-sub-title-img"]}></span>
                    <span className={styles["list-sub-title"]}>도착지</span>
                </div>
            </div>

            <div className={styles["time-list-wrap"]}>
                {
                    props.timeList.map((data,index) => {
                        const depTime = moment(data.depPlandTime, 'YYYYMMDDHHmm');
                        const isPast = now.isAfter(depTime);
                        return (
                           !isPast &&
                           <TimeListItem
                                key={index}
                                data={data}
                            />
                        )

                    })
                }
            </div>

        </div>
    );
};

export default BusTimeList;