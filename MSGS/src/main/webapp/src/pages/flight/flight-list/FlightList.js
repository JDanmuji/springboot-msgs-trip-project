import React, { useState } from "react";

import styles from "./FlightList.module.css";
import FlightSelectCard from "./FlightSelectCard";
import FlightItem from "./FlightItem";
import FlightWithData from "./FlightWithData";

const FlightList = () => {
  const [showMore, setShowMore] = useState(false);
  const [remainingData, setRemainingData] = useState([]);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleRemainingData = (data) => {
    setRemainingData(data);
  };

  return (
    <div className={styles["width-wrapper-flight-list"]}>
      <div className={styles["width-wrapper-flight-list-inner"]}>
        <div className={styles["flight-select-card-list"]}>
          <FlightSelectCard className="goingFlight" />
          <FlightSelectCard className="comingFlight" />
        </div>

        <div className={styles["flight-select-title"]}>
          가는 편 선택
        </div>
        <div className={styles["flight-select-item"]}>
          <FlightWithData onRemainingData={handleRemainingData} />
        </div>

        {showMore && (
          <div className={styles["flight-select-item"]}>
            {remainingData.map((item, index) => (
              <FlightItem key={index} item={item} />
            ))}
          </div>
        )}

        {!showMore && (
          <div className={styles["flight-select-btn"]} onClick={handleShowMore}>
            항공권 더 보기
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightList;