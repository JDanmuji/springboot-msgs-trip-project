import React from "react";
<<<<<<< HEAD

import items from "../flight-data/AirportData";

import styles from "./FromFlightSelect.module.css";

// 공항편 불러오기
const FromFlightSelect = (props) => {
  const airportSelectHandlers = (kor) => {
    props.selectedFromAirportHandler();
    props.fromAirportHandler(kor);
=======
import items from "../flight-data/AirportData";
import styles from "./FromFlightSelect.module.css";

const FromFlightSelect = (props) => {
  const airportSelectHandlers = (kor, eng) => {
    if (props.depAirportIdHandler) {
      props.depAirportIdHandler(eng);
    }
    if (props.fromAirportHandler) {
      props.fromAirportHandler(kor);
    }
    if (props.fromAirportEngHandler) {
      props.fromAirportEngHandler(eng);
    }
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
  };

  return (
    <div className={styles["width-wrapper"]}>
<<<<<<< HEAD

      {/* 검색창 */}
      <div className={styles["flight-select-box"]}>
        <input type="text" placeholder="도시, 공항명 검색" />

        {/* 입력된 검색어 삭제 */}
        <span>
          <img
            src={process.env.PUBLIC_URL + '/images/icon_close.png'}
            alt="icon_close"
          />
        </span>
      </div>

      {/* 공항 데이터 출력 */}
      {items.map((data) => (
        <div className={styles["airport-select-items"]} key={data.id} onClick={() => airportSelectHandlers(data.kor)}>
          <div className={styles["airport-select-box"]} >
=======
      <div className={styles["flight-select-box"]}>
        <input type="text" placeholder="도시, 공항명 검색" />
        <span>
          <img src={process.env.PUBLIC_URL + '/images/icon_close.png'} alt="icon_close" />
        </span>
      </div>

      {items.map((data) => (
        <div
          className={styles["airport-select-items"]}
          key={data.id}
          onClick={() => airportSelectHandlers(data.kor, data.eng)}
        >
          <div className={styles["airport-select-box"]}>
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
            <div className={styles["airport-select-box-location"]}>
              {data.location}
            </div>
            <div className={styles["airport-select-box-eng"]}>{data.eng}</div>
            <div className={styles["airport-select-box-bar"]}>│</div>
            <div className={styles["airport-select-box-kor"]}>{data.kor}</div>
          </div>
          <div className={styles["airport-select-box-line"]}></div>
        </div>
      ))}
    </div>
  );
};

export default FromFlightSelect;
