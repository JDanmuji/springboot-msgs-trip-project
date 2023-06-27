import React, {useEffect, useState} from 'react';
import styles from "./BusSchedule.module.css";
import BusTerminalModal from "./BusTerminalModal";
import SelectPersonInfo from "./SelectPersonInfo";
import BusTerminal from "./modal-item/BusTerminal";
import BusCalendar from "./modal-item/BusCalendar";

import {format} from "date-fns";
import { ko } from "date-fns/locale";
import Loading from "../../../components/common/Loading";

const BusSchedule = (props) => {
    return (
        <div className={styles["bus-search-container"]}>
            {/* 출발지 */}
            <BusTerminal
                terminalName={props.fromBusTerminal}
                onClick={() => props.modalHandler("from")}
                showModal={props.showModal === "from"}
            >
                <BusTerminalModal
                    showModal={props.showModal === "from"}
                    onClick={() => props.modalHandler("")}
                    updateBusTerminal = {(data) => props.updateBusTerminal("from", data)}
                    terminalList={props.terminalList}
                />
            </BusTerminal>

            {/*/!* 도착지 *!/*/}
            <BusTerminal
                terminalName={props.toBusTerminal}
                onClick={() => props.modalHandler("to")}
                showModal={props.showModal === "to"}
            >
                <BusTerminalModal
                    showModal={props.showModal === "to"}
                    onClick={() => props.modalHandler("")}
                    updateBusTerminal = {(data) => props.updateBusTerminal("to", data)}
                    terminalList={props.terminalList}
                />
            </BusTerminal>

            {/* 여행 일정 선택 */}
            <div className={styles["day-select-container"]}>
                <div className={styles["day-container"]}
                     onClick={() => props.showModal === "calender" ? props.modalHandler("") : props.modalHandler("calender")}>

                    {/* 가는 날 */}
                    <div className={
                        props.isRoundTrip ? styles["day-select"] : [styles["day-select"], styles["day-oneway"]].join(" ")
                    }>
                        <img
                            src={process.env.PUBLIC_URL + "/images/icon_event_calendar.png"}
                            alt="icon_event_calendar"
                        />
                        {format(props.state.startDate, "MM.dd(EE)",{ locale: ko })}
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
                                {format(props.state.endDate, "MM.dd(EE)",{ locale: ko })}
                            </div>
                        </>
                    )}
                </div>
                { props.showModal === "calender" &&
                    <BusCalendar
                        onClick={() => props.modalHandler("")}
                        state={props.state}
                        setState={props.setState}
                        handlerState={props.handlerState}
                    />
                }
            </div>

            {/* 탑승객, 좌석 등급 선택 */}
            <div className={styles["select-person-container"]}>
                <div className={styles["person-info"]}
                     onClick={() =>
                         props.showModal === "person" ? props.modalHandler("") : props.modalHandler("person")}>
                    <img src={process.env.PUBLIC_URL + "/images/icon_person.png"} alt="icon_person" />
                    {props.counters.adult > 0 && `성인 ${props.counters.adult}명 `}
                    {props.counters.infant > 0 && `소아 ${props.counters.infant}명 `}
                    {props.counters.child > 0 && `유아 ${props.counters.child}명 `}
                    {(props.counters.adult !== 0 || props.counters.infant !== 0 || props.counters.child !== 0) && "ㆍ"}
                    {props.seatLabel[props.selectedSeatType]}
                </div>

                {
                    props.showModal === "person" &&
                    <SelectPersonInfo
                        // modal handler
                        onClick={() => props.modalHandler("")}

                        // count person
                        counters={props.counters}
                        updateCounter={props.updateCounter}

                        // select seat type
                        seatLabel={props.seatLabel}
                        selectedSeatType={props.selectedSeatType}
                        updateSelectedSeatType={props.updateSelectedSeatType}
                    />
                }
            </div>
        </div>
    );
};

export default BusSchedule;