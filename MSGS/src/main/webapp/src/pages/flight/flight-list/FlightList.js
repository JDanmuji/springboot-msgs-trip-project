<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b

import styles from "./FlightList.module.css";
import FlightSelectCard from "./FlightSelectCard";
import FlightItem from "./FlightItem";
<<<<<<< HEAD

const FlightList = () => {
=======
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

>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
  return (
    <div className={styles["width-wrapper-flight-list"]}>
      <div className={styles["width-wrapper-flight-list-inner"]}>
        <div className={styles["flight-select-card-list"]}>
          <FlightSelectCard className="goingFlight" />
          <FlightSelectCard className="comingFlight" />
        </div>

        <div className={styles["flight-select-title"]}>
<<<<<<< HEAD
          가는 편 선택(삼항 연산자로 변경)
        </div>
        <div className={styles["flight-select-item"]}>
          <FlightItem />
          <FlightItem />
          <FlightItem />
          <FlightItem />
        </div>

        <div className={styles["flight-select-btn"]}>항공권 찾아보기</div>
=======
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
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default FlightList;
=======
export default FlightList;
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
