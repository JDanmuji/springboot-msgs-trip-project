import React, {useState} from 'react';
import styles from "./Bus.module.css";
import FlightAroundTrip from "../flight/flight-search/FlightAroundTrip";
import BusSchedule from "./bus-search/BusSchedule";

const Bus = () => {
    // 왕복 여부
    const [isRoundTrip, setIsRoundTrip] = useState(true);

    // 공항 선택 모달창 반환
    const [showFromFlightSelect, setShowFromFlightSelect] = useState(false);
    const [showToFlightSelect, setShowToFlightSelect] = useState(false);
    const [showBoardingInfoSelect, setShowBoardingInfoSelect] = useState(false);

    // 항공권 리스트 조회
    const [showFlightList, setShowFlightList] = useState(false);

    // 성인/일반석
    const [countAdult, setCountAdult] = useState(1);
    const [countInfant, setCountInfant] = useState(0);
    const [countChild, setCountChild] = useState(0);
    const [showCheckImageN, setShowCheckImageN] = useState(true);
    const [showCheckImageP, setShowCheckImageP] = useState(false);
    const [showCheckImageB, setShowCheckImageB] = useState(false);
    const [showCheckImageF, setShowCheckImageF] = useState(false);

    // 공항 선택에 따른 값 공유
    const [fromBusTerminal, setFromBusTerminal] = useState("출발지");
    const [toBusTerminal, setToBusTerminal] = useState("도착지");
    // const [fromKorAirport, setFromKorAirport] = useState("출발지");
    // const [toKorAirport, setToKorAirport] = useState("도착지");

    // round select handler
    const directionSelectHandler = () => {
        setIsRoundTrip(!isRoundTrip);
    };

    // 모달창 열기
    const selectFromAirportHandler = () => {
        setShowFromFlightSelect(true);
    };
    const selectToAirportHandler = () => {
        setShowToFlightSelect(true);
    };
    const selectBoardingInfoHandler = () => {
        setShowBoardingInfoSelect(true);
    };
    // 닫기창
    const selectedFromAirportHandler = () => {
        setShowFromFlightSelect(false);
    };
    const selectedToAirportHandler = () => {
        setShowToFlightSelect(false);
    };
    const selectedBoardingInfoHandler = () => {
        setShowBoardingInfoSelect(false);
    };

    // 항공권 클릭 시, 항공권 리스트 component 전환
    const showFlightListHandler = () => {
        setShowFlightList(true);
    };

    // 공항 선택에 따른 값 변환을 위한 함수
    const fromAirportHandler = (data) => {
        setFromBusTerminal(data);
        console.log("fromairport: " + data);
    };
    const toAirportHandler = (data) => {
        setToBusTerminal(data);
        console.log("toairport: " + data);
    };

    const fromAirportHandlerKor = (data) => {
        setFromBusTerminal(data);
        console.log("fromairportkor: " + data);
    };

    const toAirportHandlerKor = (data) => {
        setToBusTerminal(data);
        console.log("toairportkor: " + data);
    };

    // 성인/일반석 조회
    const addAdultHandler = () => {
        setCountAdult((prevCount) => prevCount + 1);
    };
    const subAdultHandler = () => {
        setCountAdult((prevCount) => (prevCount <= 0 ? 0 : prevCount - 1));
    };
    const addInfantHandler = () => {
        setCountInfant((prevCount) => prevCount + 1);
    };
    const subInfantHandler = () => {
        setCountInfant((prevCount) => (prevCount <= 0 ? 0 : prevCount - 1));
    };
    const addChildHandler = () => {
        setCountChild((prevCount) => prevCount + 1);
    };
    const subChildHandler = () => {
        setCountChild((prevCount) => (prevCount <= 0 ? 0 : prevCount - 1));
    };

    const CheckImgHandlerN = () => {
        setShowCheckImageN((prevShowImageN) => !prevShowImageN);
    };
    const CheckImgHandlerP = () => {
        setShowCheckImageP((prevShowImageP) => !prevShowImageP);
    };
    const CheckImgHandlerB = () => {
        setShowCheckImageB((prevShowImageB) => !prevShowImageB);
    };
    const CheckImgHandlerF = () => {
        setShowCheckImageF((prevShowImageF) => !prevShowImageF);
    };


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
                        selectFromAirportHandler={selectFromAirportHandler}
                        selectToAirportHandler={selectToAirportHandler}
                        selectBoardingInfoHandler={selectBoardingInfoHandler}
                        fromBusTerminal={fromBusTerminal}
                        toBusTerminal={toBusTerminal}
                        countAdult={countAdult}
                        countInfant={countInfant}
                        countChild={countChild}
                        showCheckImageN={showCheckImageN}
                        showCheckImageP={showCheckImageP}
                        showCheckImageB={showCheckImageB}
                        showCheckImageF={showCheckImageF}/>

                    <div className={styles["bus-search-btn-wrap"]}>
                        <div
                            className={styles["bus-search-btn"]}
                            onClick={showFlightListHandler}
                        >
                            항공권 검색
                        </div>
                    </div>

                </div>



            </div>


        </div>
    );
};

export default Bus;