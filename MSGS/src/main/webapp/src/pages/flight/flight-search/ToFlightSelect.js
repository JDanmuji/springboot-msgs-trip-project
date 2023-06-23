import React from "react";
import items from "../flight-data/AirportData";
import styles from "./ToFlightSelect.module.css";

const ToFlightSelect = (props) => {
  const airportSelectHandlers = (kor, eng) => {
    props.selectedToAirportHandler();
    props.toAirportHandlerKor(kor);
    props.toAirportHandler(eng);
  };

  return (
    <div className={styles["width-wrapper"]}>
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

export default ToFlightSelect;
