import React from 'react';
import styles from "./BusSchedule.module.css";
import BusTerminalModal from "./BusTerminalModal";
import SelectPersonInfo from "./SelectPersonInfo";

const BusSchedule = (props) => {
    // 일자 표현식(Default-오늘 기준)
    const today = new Date();

    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const dayOfWeek = weekdays[today.getDay()];

    const formattedDate = `${month}.${day}(${dayOfWeek})`;

    // 일자 표현식(오늘로부터 3일 후)---날짜 바꾸는 곳
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 3); // 3일 후

    const futureMonth = String(futureDate.getMonth() + 1).padStart(2, "0");
    const futureDay = String(futureDate.getDate()).padStart(2, "0");
    const futureDayOfWeek = weekdays[futureDate.getDay()];

    const formattedFutureDate = `${futureMonth}.${futureDay}(${futureDayOfWeek})`;

    // // 일반석 등 선택 요소 반환을 위한 배열 생성
    // const selectedSeats = [];
    //
    // if (props.showCheckImageN) {
    //     selectedSeats.push("일반석");
    // }
    // if (props.showCheckImageB) {
    //     selectedSeats.push("비즈니스석");
    // }
    //
    // let seatOutput = "";
    // if (selectedSeats.length === 1) {
    //     seatOutput = selectedSeats[0];
    // } else if (selectedSeats.length > 1) {
    //     seatOutput = `${selectedSeats[0]} 외`;
    // }

    return (
        <div className={styles["bus-search-container"]}>
            {/* 출발지 */}
            <div className={styles["bus-terminal-container"]}>
                <div className={styles["bus-terminal"]} onClick={props.selectFromBusModal}>
                    <img
                        src={process.env.PUBLIC_URL + "/images/icon_location.png"}
                        alt="icon_location"
                    />
                    {props.fromBusTerminal}
                </div>
                {
                    props.showFromBusModal &&
                    <BusTerminalModal
                        showFromBusModal={props.showFromBusModal}
                        selectFromBusModal = {props.selectFromBusModal}
                    />
                }
            </div>

            {/* 도착지 */}
            <div className={styles["bus-terminal-container"]}>
                <div className={styles["bus-terminal"]} onClick={props.selectToBusModal}>
                    <img
                        src={process.env.PUBLIC_URL + "/images/icon_location.png"}
                        alt="icon_location"
                    />
                    {props.toBusTerminal}
                </div>
                {
                    props.showToBusSelect &&
                    <BusTerminalModal
                        showToBusSelect={props.showToBusSelect}
                        selectToBusModal = {props.selectToBusModal}
                    />
                }
            </div>

            {/* 여행 일정 선택 */}
            <div className={styles["select-container"]}>
                {/* 가는 날 */}
                <div className={
                    props.isRoundTrip ? styles["day-select"] : [styles["day-select"], styles["day-oneway"]].join(" ")
                }>
                    <img
                        src={process.env.PUBLIC_URL + "/images/icon_event_calendar.png"}
                        alt="icon_event_calendar"
                    />
                    {formattedDate}
                </div>
                {/* 왕복인지 편도인지에 따른 Component 전환: Default-왕복 */}
                {props.isRoundTrip && (
                    <>
                        {/* 오는 날 */}
                        <div className={styles["day-select"]}>
                            <img
                                src={process.env.PUBLIC_URL + "/images/icon_event_calendar.png"}
                                alt="icon_event_calendar"
                            />
                            {formattedFutureDate}
                        </div>
                    </>
                ) }
            </div>

            {/* 탑승객, 좌석 등급 선택 */}
            <div className={styles["select-person-container"]}>
                <div
                    className={styles["person-info"]}
                    onClick={props.selectPersonModal}
                >
                    <img
                        src={process.env.PUBLIC_URL + "/images/icon_person.png"}
                        alt="icon_person"
                    />
                    {props.counters.adult > 0 ? `성인 ${props.counters.adult}명 ` : ``}
                    {props.counters.infant > 0 ? `소아 ${props.counters.infant}명 ` : ``}
                    {props.counters.child > 0 ? `유아 ${props.counters.child}명 ` : ``}
                    {/*ㆍ*/}
                    {/*{seatOutput}*/}
                </div>
                {
                    props.showSelectPerson &&
                    <SelectPersonInfo
                        selectPersonModal={props.selectPersonModal}

                        counters={props.counters}
                        updateCounter={props.updateCounter}
                    />
                }
            </div>
        </div>
    );
};

export default BusSchedule;