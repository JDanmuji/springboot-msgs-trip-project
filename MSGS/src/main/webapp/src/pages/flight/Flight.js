import React, { useState } from "react";

import FlightAroundTrip from "./flight-search/FlightAroundTrip";
import StickyBanner from "./StickyBanner";
import RcmdTrips from "./trip-list/RcmdTrips";

import styles from "./Flight.module.css";
import FromFlightSelect from "./flight-search/FromFlightSelect";
import ToFlightSelect from "./flight-search/ToFlightSelect";
import BoardingInfoSelect from "./flight-search/BoardingInfoSelect";
import FlightList from "./flight-list/FlightList";
import { is } from "date-fns/locale";


const Flight = () => {
  //도시, 항공명 선택 모달창 닫기
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };


  // 왕복 여부
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  // 공항 선택 모달창 반환
  const [showFromFlightSelect, setShowFromFlightSelect] = useState(false);
  const [showToFlightSelect, setShowToFlightSelect] = useState(false);
  const [showBoardingInfoSelect, setShowBoardingInfoSelect] = useState(false);

  //날짜 선택
  const [date1, setDate1] = useState("");//가는 편 날짜
  const [date2, setDate2] = useState("");//오는 편의 날짜

  const API_KEY = process.env.REACT_APP_FLIGHT_API_KEY;

  const [data, setData] = useState([]);//가는 편
  const [data2, setData2] = useState([]);//오는 편

  const getData = async () => {//가는 편의 데이터 가져오기

    const depPlandTime = date1;
    const url = `http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&_type=json&depAirportId=${fromAirport}&arrAirportId=${toAirport}&depPlandTime=${depPlandTime}`;

    const response = await fetch(url);
    const result = await response.json();
    const items = result?.response?.body?.items?.item;
    console.log("url", result)

    //가는 편의 항공편이 없는 경우 
    if (!items) {
      setData([]); // items 배열이 존재하지 않을 경우 빈 배열로 설정
      alert("해당하는 항공권이 없습니다.");
    } else {
      console.log(items)
      setData(items);
    }

  }
  const getData2 = async () => {
    console.log("getData2 호출")
    const arivPlandTime = date2;
    const url2 = `http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&_type=json&depAirportId=${toAirport}&arrAirportId=${fromAirport}&depPlandTime=${arivPlandTime}`;
  
    const response2 = await fetch(url2);
    const result2 = await response2.json();
    const items2 = result2?.response?.body?.items?.item;
    console.log("url2", result2);
  
    // 오는 편의 항공편이 없는 경우
    if (!items2) {
      setData2([]); // items 배열이 존재하지 않을 경우 빈 배열로 설정
      alert("해당하는 항공권이 없습니다.");
    } else {
      console.log("오는 편 항공권: ", items2);
      setData2(items2);
    }
  };
  

  const handleDateChange = (newDate1, newDate2) => {

    setDate1(newDate1);
    setDate2(newDate2);
    console.log("flight!: " + newDate1, newDate2);//출발일  도착일
  };



  // 항공권 리스트 조회
  
  const [showFlightList, setShowFlightList] = useState(false);//가는 편

  // 성인/일반석
  const [countAdult, setCountAdult] = useState(1);
  const [countInfant, setCountInfant] = useState(0);
  const [countChild, setCountChild] = useState(0);
  const [showCheckImageN, setShowCheckImageN] = useState(true);
  const [showCheckImageP, setShowCheckImageP] = useState(false);
  const [showCheckImageB, setShowCheckImageB] = useState(false);
  const [showCheckImageF, setShowCheckImageF] = useState(false);



  const roundSelectHandler = () => {//왕복
    setIsRoundTrip(true);
  };
  const onewaySelectHandler = () => {//편도
    setIsRoundTrip(false);
  };

  // 공항 선택에 따른 값 공유
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
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

  // 항공권 클릭 시, 가는 편의  항공권 리스트 component 전환
  const showFlightListHandler = () => {
    setShowFlightList(true);
    console.log("왕복인지 편도인지",isRoundTrip);
    getData();
    getData2();
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
            조회하기
          </div>


        </div>
      </div>

      {/* 항공권 검색 클릭 시, 인기 추천 여행지에서 항공권 리스트로 전환 */}
      {/* 가는 편 */}
      {showFlightList ?
        // <FlightList fromAirport={fromAirport} toAirport={toAirport} />
        <FlightList

          date1={date1} date2={date2}
          data={data} data2={data2}
          isRoundTrip={isRoundTrip}
          
        />
        : <RcmdTrips />}

        {/* 오는 편
      {showFlightList2 ?
        // <FlightList fromAirport={fromAirport} toAirport={toAirport} />
        <FlightList

          date1={date1} date2={date2}
          data2={data2}
        />
        : <RcmdTrips />}  */}
      {/* {showFlightList ? <FlightList /> : <FlightList />}

      {/* 클릭에 따른 공항 모달창 출력 */}
      {showFromFlightSelect && (
        <div className={styles["show-from-flight-select"]}>
          <FromFlightSelect
            onClose={handleCloseClick}
            selectedFromAirportHandler={selectedFromAirportHandler}
            fromAirportHandler={fromAirportHandler}
            fromAirportHandlerKor={fromAirportHandlerKor}
          />
        </div>
)}

      {showToFlightSelect && (
        <div className={styles["show-to-flight-select"]}>
          <ToFlightSelect
            onClose={handleCloseClick}
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

    </div>
  );
};

export default Flight;