import React, { useState } from "react";
import { format } from "date-fns";

import styles from "./FlightAroundTrip.module.css";
import TripSchedule2 from "../../tripschedule/tripschedule2/TripSchedule2";
import Calendar2 from "../../tripschedule/tripschedule2/Calendar2";

const FlightAroundTrip = (props) => {
  const [selectedStartDate, setSelectedStartDate] = useState('출발날짜');
  const [selectedEndDate, setSelectedEndDate] = useState('도착날짜');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateSelect = (startDate, endDate) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
    onFlightData(startDate, endDate); // 데이터를 부모 컴포넌트로 전달
  };

  const formattedStartDate = selectedStartDate ? format(selectedStartDate, 'yyyyMMdd') : '';
  const formattedEndDate = selectedEndDate ? format(selectedEndDate, 'yyyyMMdd') : '';
  console.log("Flight Data1:", formattedStartDate, formattedEndDate);
  
  const onFlightData = (formattedStartDate, formattedEndDate) => {
    // 데이터를 부모 컴포넌트로 전달하는 처리를 여기에 작성
    console.log("Flight Data:", formattedStartDate, formattedEndDate);
    // 예: props.onFlightData(startDate, endDate);
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
              {selectedStartDate !== '출발날짜' && (
                <div>{format(selectedStartDate, 'yyyy-MM-dd')}</div>
              )}
            </div>

            <div className={styles["day-coming"]}>
              <img
                src={process.env.PUBLIC_URL + "/images/icon_event_calendar.png"}
                alt="icon_event_calendar"
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
              {selectedEndDate !== '도착날짜' && (
                <div>{format(selectedEndDate, 'yyyy-MM-dd')}</div>
              )}
            </div>
          </>
        ) : (
          <div className={styles["day-oneway"]}>
            <img src={process.env.PUBLIC_URL + "/images/icon_event_calendar.png"} alt="icon_event_calendar" />
          </div>
        )}
      </div>

      <div className={styles["boarding-info"]} onClick={props.selectBoardingInfoHandler}>
        <img src={process.env.PUBLIC_URL + "/images/icon_person.png"} alt="icon_person" />
        {props.countAdult > 0 ? `성인 ${props.countAdult}명 ` : ``}
        {props.countInfant > 0 ? `소아 ${props.countInfant}명 ` : ``}
        {props.countChild > 0 ? `유아 ${props.countChild}명 ` : ``}ㆍ
        {seatOutput}
      </div>
    </div>
  );
};

export default FlightAroundTrip;
