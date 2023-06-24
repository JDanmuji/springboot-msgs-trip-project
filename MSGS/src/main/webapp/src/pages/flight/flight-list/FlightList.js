import React, { useState } from "react";

import styles from "./FlightList.module.css";
import FlightSelectCard from "./FlightSelectCard";
import FlightItem from "./FlightItem";
import FlightWithData from "./FlightWithData";

const FlightList = (props) => {
  const [showMore, setShowMore] = useState(false);
  const [remainingData, setRemainingData] = useState([]);
  const [dataYN, setDataYN] = useState(props.data);


  console.log(props.data)
  const handleShowMore = () => {
    console.log(test);
    setShowMore(true);
    // getData();
  };

  const handleRemainingData = (data) => {
    console.log(data)
    setRemainingData(data);
  };


  console.log("FlightList", (props.data))
  console.log("FlightList", (dataYN.length > 0))




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

        {showMore && (
          <div className={styles["flight-select-item"]}>
            {remainingData.map((item, index) => (
              <FlightItem key={index} item={item} />
            ))}
          </div>
        )}

        {!showMore && (
          <div className={styles["flight-select-btn"]} onClick={() => handleShowMore()}>
            항공권 선택하기
          </div>
        )}
      </div>
      {(props.data) &&

        < FlightWithData
          data={props.data}
        />

      }
    </div>
  );
};

export default FlightList;