import React, { useState } from "react";

import FlightAroundTrip from "./flight-search/FlightAroundTrip";
import StickyBanner from "./StickyBanner";
import RcmdTrips from "./trip-list/RcmdTrips";

import styles from "./Flight.module.css";
import FromFlightSelect from "./flight-search/FromFlightSelect";
import ToFlightSelect from "./flight-search/ToFlightSelect";
import BoardingInfoSelect from "./flight-search/BoardingInfoSelect";
import FlightList from "./flight-list/FlightList";


const Flight = () => {
  // 왕복 여부
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  // 공항 선택 모달창 반환
  const [showFromFlightSelect, setShowFromFlightSelect] = useState(false);
  const [showToFlightSelect, setShowToFlightSelect] = useState(false);
  const [showBoardingInfoSelect, setShowBoardingInfoSelect] = useState(false);

  //날짜 선택
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");


  //const { setFromAirport, setToAirport, setFromKorAirport, showFlightListHandler, setToKorAirport } = props
  const API_KEY = `NSlTZ99NuCRBE2DNWxDko3Ncyh%2FydKz3jPORuB18BrwOKoldcWLXhcfTG%2FKYoHtCJkK7F%2Bavyrp%2FezCVffMy6Q%3D%3D`;
  const [data, setData] = useState([]);

  const getData = async () => {

    const depPlandTime = date1;
    // const arivPlandTime = date2;
    const url = `http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${API_KEY}&pageNo=1&numOfRows=100&_type=json&depAirportId=${fromAirport}&arrAirportId=${toAirport}&depPlandTime=${depPlandTime}`;

    const response = await fetch(url);
    const result = await response.json();
    const items = result?.response?.body?.items?.item;
    console.log("url", result)

    if (!items) {
      setData([]); // items 배열이 존재하지 않을 경우 빈 배열로 설정
    } else {
      console.log(items)
      setData(items);
    }

  }

  const handleDateChange = (newDate1, newDate2) => {
    setDate1(newDate1);
    setDate2(newDate2);
    console.log("flight!: " + date1, date2);
  };



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



  const roundSelectHandler = () => {
    setIsRoundTrip(true);
  };
  const onewaySelectHandler = () => {
    setIsRoundTrip(false);
  };

  // 공항 선택에 따른 값 공유
  const [fromAirport, setFromAirport] = useState("출발지");
  const [toAirport, setToAirport] = useState("도착지");
  const [fromKorAirport, setFromKorAirport] = useState("출발공항");
  const [toKorAirport, setToKorAirport] = useState("도착공항");

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
    getData();
  };

  // 공항 선택에 따른 값 변환을 위한 함수
  const fromAirportHandler = (data) => {
    setFromAirport(data);
    //  console.log("fromairport: " + data);
  };
  const toAirportHandler = (data) => {
    setToAirport(data);
    //  console.log("toairport: " + data);
  };

  const fromAirportHandlerKor = (data) => {
    setFromKorAirport(data);
    // console.log("fromairportkor: " + data);
  };

  const toAirportHandlerKor = (data) => {
    setToKorAirport(data);
    //   console.log("toairportkor: " + data);
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
    <div className={styles["width-wrapper"]}>
      <StickyBanner />
      <p className={styles["flight-headline"]}>어디로 떠나시나요?</p>
      <div className={styles["width-wrapper-inner"]}>
        {/* 왕복, 편도 선택 */}
        <div className={styles["select-round-oneway"]}>
          <div
            className={
              isRoundTrip ? styles["select-round"] : styles["not-select-round"]
            }
            onClick={roundSelectHandler}
          >
            왕복
          </div>
          <div
            className={
              isRoundTrip
                ? styles["not-select-oneway"]
                : styles["select-oneway"]
            }
            onClick={onewaySelectHandler}
          >
            편도
          </div>
        </div>

        <div className={styles["width-wrapper-inner-inner"]}>
          {/* onClick() 전달 후 click값 전달받아 setData 변환 처리 */}
          <FlightAroundTrip
            onDateUpdate={handleDateChange}
            isRoundTrip={isRoundTrip}
            selectFromAirportHandler={selectFromAirportHandler}
            selectToAirportHandler={selectToAirportHandler}
            selectBoardingInfoHandler={selectBoardingInfoHandler}
            fromKorAirport={fromKorAirport}
            toKorAirport={toKorAirport}
            fromAirport={fromAirport}
            toAirport={toAirport}
            countAdult={countAdult}
            countInfant={countInfant}
            countChild={countChild}
            showCheckImageN={showCheckImageN}
            showCheckImageP={showCheckImageP}
            showCheckImageB={showCheckImageB}
            showCheckImageF={showCheckImageF}
          />

          <div
            className={styles["direct-flight-search-btn"]}
            onClick={showFlightListHandler}
          >
            항공권 검색
          </div>
        </div>
      </div>




      {/* 항공권 검색 클릭 시, 인기 추천 여행지에서 항공권 리스트로 전환 */}
      {showFlightList ?
        // <FlightList fromAirport={fromAirport} toAirport={toAirport} />
        <FlightList

          date1={date1} date2={date2}
          data={data}
        />
        : <RcmdTrips />}
      {/* {showFlightList ? <FlightList /> : <FlightList />} */}

      {/* 클릭에 따른 공항 모달창 출력 */}
      {showFromFlightSelect && (
        <div className={styles["show-from-flight-select"]}>
          <FromFlightSelect
            selectedFromAirportHandler={selectedFromAirportHandler}
            fromAirportHandler={fromAirportHandler}
            fromAirportHandlerKor={fromAirportHandlerKor}
          />
        </div>
      )}
      {showToFlightSelect && (
        <div className={styles["show-to-flight-select"]}>
          <ToFlightSelect
            selectedToAirportHandler={selectedToAirportHandler}
            toAirportHandler={toAirportHandler}
            toAirportHandlerKor={toAirportHandlerKor}
          />
        </div>
      )}

      {/* 클릭에 따른 탑승 정보 선택 모달 출력 */}
      {showBoardingInfoSelect && (
        <div className={styles["show-boarding-info-select"]}>
          <BoardingInfoSelect
            selectedBoardingInfoHandler={selectedBoardingInfoHandler}
            countAdult={countAdult}
            countInfant={countInfant}
            countChild={countChild}
            showCheckImageN={showCheckImageN}
            showCheckImageP={showCheckImageP}
            showCheckImageB={showCheckImageB}
            showCheckImageF={showCheckImageF}
            addAdultHandler={addAdultHandler}
            subAdultHandler={subAdultHandler}
            addInfantHandler={addInfantHandler}
            subInfantHandler={subInfantHandler}
            addChildHandler={addChildHandler}
            subChildHandler={subChildHandler}
            CheckImgHandlerN={CheckImgHandlerN}
            CheckImgHandlerP={CheckImgHandlerP}
            CheckImgHandlerB={CheckImgHandlerB}
            CheckImgHandlerF={CheckImgHandlerF}
          />
        </div>
      )}


      {/* <FlightWithData
        fromAirport={fromAirport}
        setFromAirport={setFromAirport}
        toAirport={toAirport}
        setToAirport={setToAirport}
        fromAirportHandler={fromAirportHandler}
        setFromKorAirport={setFromKorAirport}
        toAirportHandler={toAirportHandler}
        setToKorAirport={setToKorAirport}
        date1={date1} date2={date2} 
      /> */}
      {/* <FlightList fromAirport={fromAirport}

        toAirport={toAirport}

        fromAirportHandler={fromAirportHandler}

        toAirportHandler={toAirportHandler}

        date1={date1} date2={date2} /> */}

    </div>
  );
};

export default Flight;