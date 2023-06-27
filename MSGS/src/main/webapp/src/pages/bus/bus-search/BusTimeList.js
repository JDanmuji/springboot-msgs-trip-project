import React from 'react';
import styles from "./BusTimeList.module.css";

import BusSelectCard from "./modal-item/BusSelectCard";

const BusTimeList = () => {
    return (
        <div className={styles["bus-time-wrap"]}>
            <div className={styles["bus-selected-card"]}>
                <BusSelectCard />
                <BusSelectCard />
            </div>

            <div className={styles["time-list-title"]}>
                가는 편 선택
            </div>

            {/*{!showMore && (*/}
            {/*    <div className={styles["flight-select-btn"]} onClick={handleShowMore}>*/}
            {/*        항공권 선택하기*/}
            {/*    </div>*/}
            {/*)}*/}

        </div>
    );
};

export default BusTimeList;