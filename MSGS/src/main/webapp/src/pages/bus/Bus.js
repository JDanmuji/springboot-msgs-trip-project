import React, {useEffect, useRef, useState} from 'react';
import styles from "./Bus.module.css";
import BusSchedule from "./bus-search/BusSchedule";
import BusTerminalModal from "./bus-search/BusTerminalModal";
import {addDays} from "date-fns";

const Bus = () => {
    // 왕복 여부
    const [isRoundTrip, setIsRoundTrip] = useState(true);

    // round select handler
    const directionSelectHandler = () => {
        setIsRoundTrip(!isRoundTrip);
        // if you swap around and one-direction, close all modal
        modalHandler("")

        // 편도 선택시 date range 0
        setState({
            startDate: state.startDate,
            endDate: state.startDate,
            key: 'selection'
        });
    };

    // select bus terminal
    const [fromBusTerminal, setFromBusTerminal] = useState("출발지");
    const [toBusTerminal, setToBusTerminal] = useState("도착지");

    //seat label
    const seatLabel = {
        all : "전체",
        general: "일반",
        honor : "우등",
        premium : "프리미엄"
    }

    // modal handler
    const [showModal, setShowModal] = useState()

    const modalHandler = (modalState) => {
        setShowModal(modalState);
    };

    // 성인/일반석
    const [counters, setCounters] = useState({
        adult: 1,
        infant: 0,
        child: 0
    });

    // 좌석 선택
    const [selectedSeatType, setSelectedSeatType] = useState("all");

    // 성인/일반석 조회
    const updateCounter = (type, diff) => {
        setCounters(prevCounters => {
            const newCount = prevCounters[type] + diff;
            if (newCount >= 0) {
                return {
                    ...prevCounters,
                    [type]: newCount
                }
            } else {
                return prevCounters;
            }
        });
    }
    // 좌석 선택 핸들러
    const updateSelectedSeatType = (seatType) => {
        setSelectedSeatType(seatType);
    };

    // 공항 선택에 따른 값 변환을 위한 함수
    const updateBusTerminal = (type, data) => {
        if (type === "from") {
            setFromBusTerminal(data);
        } else if (type === "to") {
            setToBusTerminal(data);
        }
        modalHandler("")
    };

    //날짜 설정
    const [state, setState] = useState({
        startDate: new Date(),
        endDate: addDays(new Date(), 3),
        key: 'selection',
    });

    const handlerState = (item) => {
        setState(item);
        //편도에서 date 선택시 창 닫힘
        if(!isRoundTrip){
            modalHandler("")
        }
    }
    //왕복에서 날짜 선택시 start date end date 선택시 자동 창 닫힘
    useEffect(() => {
        if (state.startDate !== state.endDate) {
            modalHandler("");
        }
    }, [state]);

    return (
        <div className={styles["bus-wrapper"]}>
            {/* header */}
            <div className={styles["head-container-wrap"]} onClick={() => modalHandler("")}>
                <div className={styles["head-container"]}>
                    <div className={styles["head-img"]} />
                    <div className={styles["bus-headline"]}>
                        <p className={styles["bus-headline-text"]}>어디로 떠나시나요?</p>
                    </div>
                </div>
            </div>

            {/* main */}
            <div className={styles["main-container"]}>
                {/* 왕복, 편도 선택 */}
                <div className={styles["main-head-container"]}>
                    <div className={styles["select-round-oneway"]}>
                        <div
                            className={
                                isRoundTrip
                                    ? styles["selected-direction"] : styles["not-selected-direction"]
                            }
                            onClick={directionSelectHandler}
                        >
                            왕복
                        </div>
                        <div
                            className={
                                isRoundTrip
                                    ? styles["not-selected-direction"] : styles["selected-direction"]
                            }
                            onClick={directionSelectHandler}
                        >
                            편도
                        </div>
                    </div>
                </div>

                <div className={styles["main-content-wrapper"]}>
                    <BusSchedule
                        isRoundTrip={isRoundTrip}
                        updateBusTerminal={updateBusTerminal}

                        // from terminal , to terminal text
                        fromBusTerminal={fromBusTerminal}
                        toBusTerminal={toBusTerminal}

                        // modal controller
                        showModal={showModal}
                        modalHandler={modalHandler}

                        // count person
                        counters = {counters}
                        updateCounter={updateCounter}

                        // select seat type
                        seatLabel={seatLabel}
                        selectedSeatType={selectedSeatType}
                        updateSelectedSeatType={updateSelectedSeatType}

                        //date
                        state={state}
                        setState={setState}
                        handlerState={handlerState}
                    />

                    <div className={styles["bus-search-btn-wrap"]}>
                        <div
                            className={styles["bus-search-btn"]}
                            // onClick={showFlightListHandler}
                        >
                            조회하기
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Bus;