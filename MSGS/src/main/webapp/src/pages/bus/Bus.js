import React, {useEffect, useRef, useState} from 'react';
import styles from "./Bus.module.css";

import BusSchedule from "./bus-search/BusSchedule";
import {addDays, format} from "date-fns";
import {fetchBusTimeList, fetchTerminalList} from "./bus-data/BusTerminalData";
import Loading from "../../components/common/Loading";
import BusTimeList from "./bus-search/BusTimeList";

const Bus = () => {
    // 왕복 여부
    const [isRoundTrip, setIsRoundTrip] = useState(true);
    const [checkDir, setCheckDir] = useState("around");

    // select bus terminal
    const [fromBusTerminal, setFromBusTerminal] = useState({
        terminalId: "",
        terminalNm: "출발지"
    });
    const [toBusTerminal, setToBusTerminal] = useState({
        terminalId: "",
        terminalNm: "도착지"
    });

    //seat label
    const seatLabel = {
        all : "전체",
        general: "일반",
        honor : "우등",
        premium : "프리미엄"
    }

    // modal handler
    const [showModal, setShowModal] = useState()

    // 성인/일반석
    const [counters, setCounters] = useState({
        adult: 1,
        infant: 0,
        child: 0
    });

    // 좌석 선택
    const [selectedSeatType, setSelectedSeatType] = useState("all");

    //날짜 설정
    const [state, setState] = useState({
        startDate: new Date(),
        endDate: addDays(new Date(), 1),
        key: 'selection',
    });

    // bus terminal list
    const [terminalList, setTerminalList] = useState([]);

    // bus time iqure
    const [timeList, setTimeList] = useState([]);

    // search bus time list
    const [searchTimeList, setSearchTimeList] = useState(false);

    // bus select card
    const [selectTime, setSelectTime] = useState({
        fromTime: null,
        toTime: null
    });


    // ========================================================================
    // event handler
    // round select handler
    const directionSelectHandler = (data) => {
        setCheckDir(data);

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

    const modalHandler = (modalState) => {
        setShowModal(modalState);
    };
    console.log(showModal);

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

    // terminal 선택에 따른 값 변환을 위한 함수
    const updateBusTerminal = (type, data) => {
        if (type === "from") {
            setFromBusTerminal(data);
        } else if (type === "to") {
            setToBusTerminal(data);
        }
        modalHandler("")
    };

    const handlerState = (item) => {
        setState(item);
        //편도에서 date 선택시 창 닫힘
        if(!isRoundTrip){
            modalHandler("")
        }
    }

    const showTimeListHandler = () => {
        setSearchTimeList(true)
    }
    const clickSearchBtn = () => {
        showTimeListHandler()
        setTimeList([]);

        setSelectTime({
            fromTime: null,
            toTime: null
        });

        const startDate = format(state.startDate, "yyyyMMdd");
        getBusTimeData(startDate)
    }
    const getBusTimeData = async (date) => {
        const promises = [];
        promises.push(fetchBusTimeList(fromBusTerminal.terminalId, toBusTerminal.terminalId, date, selectedSeatType));

        try {
            const results = await Promise.all(promises);
            const newList = results.flatMap(result => result);
            setTimeList(newList)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(timeList);

    const selectTimeHandler = (type, data) => {
        const busTimeData = ({
            depPlaceNm: data.depPlaceNm,    // 출발지
            depPlandTime: data.depPlandTime,
            arrPlaceNm: data.arrPlaceNm,    // 도착지
            arrPlandTime: data.arrPlandTime,
            gradeNm: data.gradeNm,
            charge: data.charge
        })

        setSelectTime((prevState) => ({
            ...prevState,
            [`${type}Time`]: busTimeData
        }));

        if(!selectTime.toTime) {
            const endDate = format(state.endDate, "yyyyMMdd");
            getBusTimeData(endDate)
        }
    }

    //왕복에서 날짜 선택시 start date end date 선택시 자동 창 닫힘
    useEffect(() => {
        if (state.startDate !== state.endDate) {
            modalHandler("");
        }
    }, [state]);

    // ----------------------------------------
    // bus terminal list export
    // ----------------------------------------
    // const delay = (ms) => {
    //     return new Promise((resolve) => setTimeout(resolve, ms))
    // }

    useEffect(() => {
        const fetchData = async () => {
            const promises = [];
            promises.push(fetchTerminalList());

            try {
                const results = await Promise.all(promises);
                const newList = results.flatMap(result => result);
                setTerminalList(newList);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    console.log(terminalList)

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
                            onClick={() => {
                                if (checkDir === "one") {
                                    directionSelectHandler("around");
                                }
                            }}
                        >
                            왕복
                        </div>
                        <div
                            className={
                                isRoundTrip
                                    ? styles["not-selected-direction"] : styles["selected-direction"]
                            }
                            onClick={() => {
                                if (checkDir === "around") {
                                    directionSelectHandler("one");
                                }
                            }}
                        >
                            편도
                        </div>
                    </div>
                </div>

                <div className={styles["main-content-wrapper"]}>
                    <div className={styles["main-content-wrap"]}>
                        <BusSchedule
                            isRoundTrip={isRoundTrip}
                            updateBusTerminal={updateBusTerminal}

                            // from terminal , to terminal text
                            fromBusTerminal={fromBusTerminal}
                            toBusTerminal={toBusTerminal}

                            //terminal list
                            terminalList={terminalList}

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
                                onClick={clickSearchBtn}
                            >
                                조회하기
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["bus-time-list-wrap"]}>
                    {
                        searchTimeList && (
                            timeList.length > 0 && timeList[0].depPlaceNm === "notExist" ? (
                                alert("조회 정보가 존재하지 않습니다.")
                            ) : (
                                timeList.length === 0 ? (
                                    <Loading />
                                ) : (
                                    <BusTimeList
                                        fromBusTerminal={fromBusTerminal.terminalNm}
                                        toBusTerminal={toBusTerminal.terminalNm}
                                        state={state}
                                        timeList={timeList}
                                        selectTime={selectTime}
                                        setSelectTime={setSelectTime}
                                        selectTimeHandler={selectTimeHandler}
                                    />
                                )
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Bus;