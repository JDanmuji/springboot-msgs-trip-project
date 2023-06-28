import React, { useState } from "react";
import styles from "./FlightList.module.css";
import FlightSelectCard from "./FlightSelectCard";
import FlightSelectCardOneWay from "./FlightSelectCardOneWay";

const FlightList = (props) => {
  // 가는 길 선택 데이터
  const [clickItem, setClickItem] = useState("");
  // 오는 길 선택 데이터
  const [clickItem2, setClickItem2] = useState("");
  let isRoundTrip = props.isRoundTrip;
  console.log("isRoundTrip 값:", isRoundTrip);
  const handleClick2 = (clickData) => {
    setClickItem2(clickData);
    console.log("FlightList2:", clickData);
  };


  const FlightItemComponent = ({ item, clickData }) => {
    const { airlineNm } = item;
    const { vihicleId } = item;
    const { depPlandTime } = item;
    const { arrPlandTime } = item;
    const { economyCharge } = item;

    function formatCurrency(value) {
      const formatter = new Intl.NumberFormat("en-US");
      return formatter.format(value);
    }

    const formattedAmount = formatCurrency(economyCharge);

    const formatTime = (time) => {
      const strTime = String(time);
      const year = strTime.substring(0, 4);
      const month = strTime.substring(4, 6);
      const day = strTime.substring(6, 8);
      const hour = strTime.substring(8, 10);
      const minute = strTime.substring(10, 12);
      return `${year}-${month}-${day} ${hour}시${minute}분`;
    };

    const formattedDepTime = formatTime(depPlandTime);
    const formattedArrTime = formatTime(arrPlandTime);

    const [isHighlighted, setIsHighlighted] = useState(false);

    const goingSelectHandler = () => {
      setIsHighlighted(!isHighlighted);
      console.log("Clicked! Data:", item);
      setClickItem(item);
    };

    
    const comingSelectHandler = () => {
      setIsHighlighted(!isHighlighted);
      console.log("Clicked! Data:", item);
      setClickItem2(item);
    };

    return (
      <div
        className={`${styles["width-wrapper-going"]} ${
          isHighlighted ? styles["highlighted"] : ""
        }`}
        onClick= {clickItem
          ?comingSelectHandler:goingSelectHandler}
      >
        <div className={styles["card-container"]}>
          <div className={styles["card-container-detail"]}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/icon_flight.png"}
                alt="icon_flight"
              />
            </div>
            <div className={styles["card-container-detail-info"]}>
              <div className={styles["card-container-detail-info-right"]}>
                <div className={styles["card-container-detail-info-right-1"]}>
                  {formattedDepTime} - {formattedArrTime}
                </div>
                <div className={styles["card-container-detail-info-right-2"]}>
                  {vihicleId}-{airlineNm}
                </div>
              </div>
              <div className={styles["card-container-detail-info-left"]}>
                {formattedAmount === "NaN" ? "57,900" : formattedAmount}원
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles["width-wrapper-flight-list"]}>
      <div className={styles["width-wrapper-flight-list-inner"]}>
        <div className={styles["flight-select-card-list"]}>
          {isRoundTrip ? (
            <>
              <FlightSelectCard className="goingFlight" clickItem={clickItem} />
              <FlightSelectCard className="comingFlight" clickItem2={clickItem2} />
            </>
          ) : (
            <FlightSelectCardOneWay className="goingFlight" clickItem={clickItem} />
          )}
        </div>

        <div className={styles["flight-select-title"]}>항공권 선택</div>

        
        <div className={styles["flight-select-btn"]} onClick={() => window.location.href = "https://flights.myrealtrip.com/air/b2c/AIR/INT/AIRINTTRP0100100000.k1?KSESID=air:b2c:SELK138RB:SELK138RB::00"}>
          항공권 예매하기
        </div>

        
      </div>

      {props.data && (
        <div className={styles["table-container"]}>
          {clickItem
            ? props.data2.map((item, index) => (
                <FlightItemComponent
                  key={index}
                  item={item}
                  handleClick2={handleClick2}
                  clickData={clickItem}
                /> 
              ))
            : props.data.map((item, index) => (
                <FlightItemComponent
                  key={index}
                  item={item}
                  handleClick2={handleClick2}
                  clickData={clickItem}
                />
              ))}
        </div>
      )}
    </div>
  );
};

export default FlightList;
