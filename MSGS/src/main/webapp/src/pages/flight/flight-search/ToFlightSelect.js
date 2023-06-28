import React, { useEffect, useState } from "react";
import items from "../flight-data/AirportData";
import styles from "./ToFlightSelect.module.css";

const ToFlightSelect = (props) => {
  const [searchQuery, setSearchQuery] = useState("");  
  const [isResetting, setIsResetting] = useState(false);

  const airportSelectHandlers = (kor, eng) => {
    props.selectedToAirportHandler();
    props.toAirportHandlerKor(kor);
    props.toAirportHandler(eng);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCloseClick = () => {
    setIsResetting(true);
  };

  useEffect(() => {
    if (isResetting) {
      props.onClose();
      setIsResetting(false);
    }
  }, [isResetting, props]);


  const filteredItems = items.filter((data) => {
    const { kor, eng } = data;
    const query = searchQuery.toLowerCase();
    return kor.toLowerCase().includes(query) || eng.toLowerCase().includes(query);
  });

  return (
    <div className={styles["modal-wrapper"]}>
      <div className={styles["modal-head-wrap"]}>
        <h1 className={styles["modal-title"]}>도시, 공항 선택</h1>
        <span onClick={handleCloseClick}>
          <img src={process.env.PUBLIC_URL + '/images/icon_close.png'} alt="icon_close" />
        </span>
      </div>

      {/* 검색창 */}
      <div className={styles["flight-select-box"]}>
        <input 
          type="text"
          placeholder="도시, 공항명 검색"
          value={searchQuery}
          onChange={handleSearch} 
        />
      </div>


      {filteredItems.map((data) => (
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
