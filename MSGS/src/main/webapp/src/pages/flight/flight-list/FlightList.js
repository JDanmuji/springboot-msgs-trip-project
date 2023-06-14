import React from 'react';

import styles from "./FlightList.module.css";
import FlightSelectCard from './FlightSelectCard';
import FlightItem from './FlightItem';

const FlightList = () => {
    return (
        <div className={styles["width-wrapper"]}>
            <div className={styles["flight-select-card-list"]}>
            <FlightSelectCard className="goingFlight" />
            <FlightSelectCard className="comingFlight" />
            </div>

            <div>가는 편 선택(삼항 연산자로 변경)</div>
            <FlightItem />

        </div>
    );
};

export default FlightList;