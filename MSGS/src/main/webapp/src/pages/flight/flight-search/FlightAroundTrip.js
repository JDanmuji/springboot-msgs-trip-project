import React, { useState } from "react";
import { format } from "date-fns";

import styles from "./FlightAroundTrip.module.css";
import Calendar2 from "../../tripschedule/tripschedule2/Calendar2";

const FlightAroundTrip = (props) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateSelect = (startDate, endDate) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
    console.log(setSelectedEndDate);
    onFlightData(startDate, endDate); // 데이터를 부모 컴포넌트로 전달
  };

  const onFlightData = (startDate, endDate) => {
    if (startDate && endDate) {
      const formattedStartDate = format(startDate, "yyyyMMdd");
      const formattedEndDate = format(endDate, "yyyyMMdd");
      props.onDateUpdate(formattedStartDate, formattedEndDate);
      console.log("fat", formattedStartDate, formattedEndDate);
    }
  };

  const selectedSeats = [];
  if (props.showCheckImageN) {
    selectedSeats.push("일반석");
  }
  if (props.showCheckImageB) {
    selectedSeats.push("비즈니스석");
  }

  let seatOutput = "";
  if (selectedSeats.length === 1) {
    seatOutput = selectedSeats[0];
  } else if (selectedSeats.length > 1) {
    seatOutput = `${selectedSeats[0]} 외`;
  }

  return (
    <div className={styles["flight-around-trip"]}>
      <div onClick={props.selectFromAirportHandler} className={styles["from-airport"]}>
        <img src={process.env.PUBLIC_URL + "/images/icon_location.png"} alt="icon_location" />
        {props.fromKorAirport}
      </div>

      <div onClick={props.selectToAirportHandler} className={styles["to-airport"]}>
        <img src={process.env.PUBLIC_URL + "/images/icon_location.png"} alt="icon_location" />
        {props.toKorAirport}
      </div>

      <div className={styles["day-going-coming"]}>
        {props.isRoundTrip ? (
          <>
            <div className={styles["day-going"]}>
              <img
                src={process.env.PUBLIC_URL + "/images/icon_event_calendar.png"}
                alt="icon_event_calendar"
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
              {isModalOpen && (
                <Calendar2 onClose={() => setIsModalOpen(false)} onDateSelect={handleDateSelect} />
              )}
              <div>{selectedStartDate ? format(selectedStartDate, "yyyy-MM-dd") : "가는 날"}</div>
            </div>

            <div className={styles["day-coming"]}>
              <img
                src={process.env.PUBLIC_URL + "/images/icon_event_calendar.png"}
                alt="icon_event_calendar"
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
              <div>{selectedEndDate ? format(selectedEndDate, "yyyy-MM-dd") : "오는 날"}</div>
            </div>
          </>
        ) : (
          <div className={styles["day-oneway"]}>
            <img src={process.env.PUBLIC_URL + "/images/icon_event_calendar.png"} 
              alt="icon_event_calendar"
              onClick={() => setIsModalOpen(!isModalOpen)}
            />
            {isModalOpen && (
                <Calendar2 onClose={() => setIsModalOpen(false)} onDateSelect={handleDateSelect} />
              )}
              <div>{selectedStartDate ? format(selectedStartDate, "yyyy-MM-dd") : "날짜 선택"}</div>
          </div>
        )}
      </div>

      <div className={styles["boarding-info"]} onClick={props.selectBoardingInfoHandler}>
        <img src={process.env.PUBLIC_URL + "/images/icon_person.png"} alt="icon_person" />
        {props.countAdult > 0 ? `성인 ${props.countAdult}명 ` : ""}
        {props.countInfant > 0 ? `소아 ${props.countInfant}명 ` : ""}
        {props.countChild > 0 ? `유아 ${props.countChild}명 ` : ""}
        {seatOutput}
      </div>
    </div>
  );
};

export default FlightAroundTrip;
