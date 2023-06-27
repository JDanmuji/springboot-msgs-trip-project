import React, { useState } from "react";
import styles from "./FlightList.module.css";
import FlightSelectCard from "./FlightSelectCard";
import FlightWithData from "./FlightWithData";

const FlightList = (props) => {
  const [showMore, setShowMore] = useState(false);
  const [clickItem, setClickItem] = useState('');

  const handleClick2 = (clickData) => {
    setClickItem(clickData);
    console.log("FlightList:", clickData);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className={styles["width-wrapper-flight-list"]}>
      <div className={styles["width-wrapper-flight-list-inner"]}>
        <div className={styles["flight-select-card-list"]}>
          <FlightSelectCard className="goingFlight" clickItem={clickItem} />
          <FlightSelectCard className="comingFlight" clickItem={clickItem} />
        </div>

        <div className={styles["flight-select-title"]}>
          가는 편 선택
        </div>


        {!showMore && (
          <div className={styles["flight-select-btn"]} onClick={handleShowMore}>
            항공권 선택하기
          </div>
        )}
      </div>
      {props.data && (
        <FlightWithData
          data={props.data}
          handleClick2={handleClick2}
        />
      )}
    </div>
  );
};

export default FlightList;