import React, {useEffect, useRef, useState} from 'react';
import styles from "./Bus.module.css";
import BusSchedule from "./bus-search/BusSchedule";
import BusTerminalModal from "./bus-search/BusTerminalModal";

const Bus = () => {
    // 왕복 여부
    const [isRoundTrip, setIsRoundTrip] = useState(true);

    // select bus terminal
    const [fromBusTerminal, setFromBusTerminal] = useState("출발지");
    const [toBusTerminal, setToBusTerminal] = useState("도착지");

    // return modal
    const [showFromBusModal, setShowFromBusModal] = useState(false);
    const [showToBusSelect, setShowToBusSelect] = useState(false);
    const [showSelectPerson, setShowSelectPerson] = useState(false);

    // 성인/일반석
    const [counters, setCounters] = useState({
        adult: 1,
        infant: 0,
        child: 0
    });
    const { adult: countAdult, infant: countInfant, child: countChild } = counters;


    const [showCheckImageN, setShowCheckImageN] = useState(true);
    const [showCheckImageP, setShowCheckImageP] = useState(false);
    const [showCheckImageB, setShowCheckImageB] = useState(false);
    const [showCheckImageF, setShowCheckImageF] = useState(false);

    // round select handler
    const directionSelectHandler = () => {
        setIsRoundTrip(!isRoundTrip);
    };

    // open from bus terminal modal
    const selectFromBusModal = () => {
        setShowFromBusModal(!showFromBusModal);
    };
    const selectToBusModal = () => {
        setShowToBusSelect(!showToBusSelect);
    };
    const selectPersonModal = () => {
        setShowSelectPerson(!showSelectPerson);
    };

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


    // 공항 선택에 따른 값 변환을 위한 함수
    // const fromAirportHandler = (data) => {
    //     setFromBusTerminal(data);
    //     console.log("fromairport: " + data);
    // };
    // const toAirportHandler = (data) => {
    //     setToBusTerminal(data);
    //     console.log("toairport: " + data);
    // };
    //
    // const fromAirportHandlerKor = (data) => {
    //     setFromBusTerminal(data);
    //     console.log("fromairportkor: " + data);
    // };
    //
    // const toAirportHandlerKor = (data) => {
    //     setToBusTerminal(data);
    //     console.log("toairportkor: " + data);
    // };
    //





    return (
        <div className={styles["bus-wrapper"]}>
            {/* header */}
            <div className={styles["head-container-wrap"]}>
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
                        fromBusTerminal={fromBusTerminal}
                        toBusTerminal={toBusTerminal}

                        // 출발지 & 도착지 modal controller
                        showFromBusModal={showFromBusModal}
                        selectFromBusModal={selectFromBusModal}
                        showToBusSelect={showToBusSelect}
                        selectToBusModal={selectToBusModal}
                        showSelectPerson={showSelectPerson}
                        selectPersonModal={selectPersonModal}

                        // person info modal controller
                        counters={counters}
                        updateCounter={updateCounter}

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

                {/*  from bus modal */}



            </div>


        </div>
    );
};

export default Bus;