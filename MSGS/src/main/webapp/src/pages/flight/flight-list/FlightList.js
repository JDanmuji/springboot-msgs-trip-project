<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 0d774dd7067380fa57966394df6b90dd5fb3c968

import styles from "./FlightList.module.css";
import FlightSelectCard from "./FlightSelectCard";
import FlightItem from "./FlightItem";

const FlightList = () => {
  return (
    <div className={styles["width-wrapper-flight-list"]}>
      <div className={styles["width-wrapper-flight-list-inner"]}>
        <div className={styles["flight-select-card-list"]}>
          <FlightSelectCard className="goingFlight" />
          <FlightSelectCard className="comingFlight" />
        </div>

        <div className={styles["flight-select-title"]}>
          가는 편 선택(삼항 연산자로 변경)
        </div>
        <div className={styles["flight-select-item"]}>
          <FlightItem />
          <FlightItem />
          <FlightItem />
          <FlightItem />
        </div>

        <div className={styles["flight-select-btn"]}>항공권 찾아보기</div>
      </div>
    </div>
  );
};

export default FlightList;
