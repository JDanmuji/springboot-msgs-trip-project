import React, { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";

import style from "./TripSchedule.module.css";

import DayPlan from "../../components/tripschedule/DayPlan";
import DayPlanEditMode from "../../components/tripschedule/DayPlanEditMode";
import SelectedPlaceList from "../../components/tripschedule/SelectedPlaceList";
import GoogleMapDay2 from "../../components/tripschedule/googleMap_rev/GoogleMapDay2";
import LocGoogleMap from "../tripplace/LocGoogleMap";

export default function TripSchedule() {
	const location = useLocation()
	//1. 전 페이지에서 보낸 selectedCity, startDate, endDate를 받음.
	const startDate = location.state.startDate
	const endDate = location.state.endDate

	/* state 시작*/
	const [winReady, setWinReady] = useState(false)  //window가 로드 된 시점에서 <Map/> 랜더링 하기 위함
	const [dateList, setDateList] = useState([])
	const [editMode, setEditMode] = useState(false) //편집모드 전환
	const [selectedDay, setSelectedDay] = useState(1)
	const [selectedCity, setSelectedCity] = useState({})

	const [planList, planListHandler] = useState({})
	const [modalDormList, setModalDormList] = useState([]) //[{}, {}, {}]
	const [modalPlaceList, setModalPlaceList] = useState([]) //[{}, {}, {}]
	/* state 끝*/


	//dateList 계산
	const getDatesStartToEnd = (startDate, endDate) => {
		console.log(startDate + '~' + endDate)
		let result = []
		let curDate = new Date(startDate)

		while (curDate <= new Date(endDate)) {
			result.push(format(curDate, 'yyyy.MM.dd'))
			curDate.setDate(curDate.getDate() + 1)
		}
		setDateList(result)
	}

	/*임시 데이터*/
	//const dateList = ['2023.6.22', '2023.6.23', '2023.6.24']
	// const selectedCity1 = {
	// 	//areaId: 1,
	// 	areaCode: 31,
	// 	sigunguCode: [1, 19],
	// 	areaTitle: '가평&#183;양평',
	// 	subTitle: '가평, 양평',
	// 	mapLat: 37.783248, //위도
	// 	mapLon: 127.543837, //경도
	// 	imageUrl: 'https://kr.object.ncloudstorage.com/msgs-file-server/cities-image/famous-city-gapeong.webp',
	// }

	//const dorm, touristSpot, restaurant
	//selectedCity.subTitle, selectedCity.sigunguCode
	//const contentTypeId = { 32: '숙박', 12: '관광지', 39: '음식점' }

	/*임시 데이터*/
	const planList1 = {
		//contentid, mapx, mapy 추가됨
		1: [
			//DAY1
			{
				order: 1,
				placeOrder: 1,
				isChecked: false,
				type: '관광지',
				title: '경포 해변1',
				location: '강릉',
			},
			{
				order: 2,
				placeOrder: 2,
				isChecked: false,
				type: '음식점',
				title: '경포 해변2',
				location: '강릉',
			},
			{
				order: 3,
				placeOrder: null,
				isChecked: false,
				type: '숙박',
				title: '조선 웨스턴 호텔',
				location: '강릉',
			},
			{
				order: 4,
				placeOrder: null,
				isChecked: false,
				type: 'memo',
				title: '중간에 야시장 갈 수 있음',
				location: null,
			},
			{
				order: 5,
				placeOrder: 3,
				isChecked: false,
				type: '관광지',
				title: '에디슨 과학 박물관 ',
				location: '강릉',
			},
			{
				order: 6,
				placeOrder: 4,
				isChecked: false,
				type: '관광지',
				title: '참소리 축음기',
				location: '강릉',
			},
		],
		2: [
			//DAY2
			{
				order: 1,
				placeOrder: 1,
				isChecked: false,
				type: '음식점',
				title: '문릿',
				location: '양평',
			},
			{
				order: 2,
				placeOrder: 2,
				isChecked: false,
				type: '관광지',
				title: '양평 두물머리',
				location: '양평',
			},
			{
				order: 3,
				placeOrder: null,
				isChecked: false,
				type: '숙박',
				title: '한옥마을 황토펜션',
				location: '양평',
			},
			{
				order: 4,
				placeOrder: null,
				isChecked: false,
				type: 'memo',
				title: '배고프면 간식 사먹자',
				location: null,
			},
			{
				order: 5,
				placeOrder: 3,
				isChecked: false,
				type: '관광지',
				title: 'C아트뮤지엄(숲속의 미술공원) ',
				location: '양평',
			},
			{
				order: 6,
				placeOrder: null,
				isChecked: false,
				type: 'memo',
				title: '숙소에 21시쯤 도착',
				location: null,
			},
		],
	}

	useEffect(() => {
		setWinReady(true)
		//1. 전 페이지에서 도시 이름, 지역코드 받아서 state에 저장. (Object형)
		setSelectedCity(location.state.selectedCity)
		console.log(selectedCity)

		// 2. schedule2에서 보낸 startDate와 endDate가지고 dateList 만들음.
		getDatesStartToEnd(startDate, endDate)

		// 3. dateList에 따라 planList = {1: [{}, {}, {}, {}], 2: [], 3: []} 식으로 초기화 한다.
		let initObj = {}
		console.log(dateList)
		dateList?.map((_, index) => {
			initObj[index + 1] = []
		})
		// console.log(initObj);

		planListHandler(initObj)

		// planListHandler(planList1)
		// }, [winReady])
	}, [winReady])

	useEffect(() => {
		/*모달창에 띄울 쓸 숙박, 장소 item들 정보 받아옴*/
		//sigunguCode = [] 이면 데이터 못 받아옴 -> 수정해야 함.

		//숙박
		selectedCity.areaCode &&
			axios
				.get(
					'/tripschedule/dormInfo',
					// '/tripschedule/dormInfo?areaCode=31&sigunguCodeList=19,20',
					{
						params: {
							areaCode: selectedCity?.areaCode, //Ex.32
							sigunguCodeList: selectedCity?.sigunguCode.length > 0 ? selectedCity?.sigunguCode?.join(',') : 0, // Ex. 1,5,7 /없으면 0
						},
					}
				)
				.then(function (response) {
					setModalDormList(response.data)
					console.log('dormInfo 성공')
				})
				.catch(function (error) {
					console.log('dormInfo 실패', error)
				})

		//Place(관광지, 음식점)
		selectedCity.areaCode &&
			axios
				.get('/tripschedule/placeInfo', {
					params: {
						areaCode: selectedCity?.areaCode,
						sigunguCodeList: selectedCity?.sigunguCode.length > 0 ? selectedCity?.sigunguCode?.join(',') : 0,
					},
				})
				.then(function (response) {
					setModalPlaceList(response.data)
					console.log('placeInfo 성공')
				})
				.catch(function (error) {
					console.log('placeInfo 실패', error)
				})
	}, [selectedCity])
	// }, []);

	//저장하기 버튼 눌렀을 때 백으로 일정 Data 보냄.
	const saveTripSchedule = () => {
		const requestBody = {
			planList: planList,
			dateList: dateList,
			cityName: selectedCity.areaTitle,
		}

		axios
			.post('/tripschedule/info', requestBody)
			.then(function (response) {
				console.log('saveTripSchedule  성공')
			})
			.catch(function (error) {
				console.log('saveTripSchedule  실패', error)
			})
	}


	return (
		<div className={style['container']}>
			{/* 저장하기 버튼 */}
			<button className={style['save-button']} onClick={saveTripSchedule}>
				저장하기
			</button>
			{/* <button className={style["save-button"]} onClick={saveTripSchedule}>
        저장하기
      </button> */}
            {/* 사이드바 */}
            <div className={style["sidebar"]}>
                <div className={style["sidebar-title"]}>
                    <p className={style["trip-title"]}>
                        {ReactHtmlParser(selectedCity.areaTitle)} 여행
                    </p>
                    <p className={style["travel-period"]}>
                        {dateList[0] + "~" + dateList[dateList.length - 1]}
                    </p>
                </div>
                <Scrollbars
                    style={{ height: "100%", width: "100%" }}
                    thumbSize={120}
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={1000}
                    renderTrackHorizontal={(props) => (
                        <div {...props} className={style["track-horizontal"]} />
                    )}
                    renderThumbHorizontal={(props) => (
                        <div {...props} className={style["thumb-horizontal"]} />
                    )}
                >
                    {/* Day1, 2, 3... 블록 */}
                    <div className={style["dayplan-wrapper"]}>
                        {editMode
                            ? //편집모드인 경우
                              dateList?.map((item, index) => (
                                  <DayPlanEditMode
                                      key={index + 1}
                                      orderDay={index + 1}
                                      date={item}
                                      planList={planList}
                                      planListHandler={planListHandler}
                                      setEditMode={setEditMode}
                                  />
                              ))
                            : //편집모드가 아닌 경우
                              dateList?.map((item, index) => (
                                  <DayPlan
                                      key={index + 1}
                                      orderDay={index + 1}
                                      date={item}
                                      planList={planList}
                                      planListHandler={planListHandler}
                                      setEditMode={setEditMode}
                                      selectedCity={selectedCity}
                                      modalDormList={modalDormList}
                                      modalPlaceList={modalPlaceList}
                                  />
                              ))}
                    </div>
                </Scrollbars>
            </div>

            {/* 구글맵 */}
            {/* //window가 로드 된 시점에서 google map을 렌더링함. */}
            <div className={style["map"]}>
                {winReady ? (
                    <GoogleMapDay2
                        planList={planList[selectedDay]}
                        selectedCity={selectedCity}
                    />
                ) : null}
            </div>

            {/* 선택한 장소 목록*/}
            <SelectedPlaceList
                planList={planList}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
            />
        </div>
    );
}
