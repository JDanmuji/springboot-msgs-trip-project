import React, { useState, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useParams, useNavigate } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import axios from 'axios'

import style from './TripSchedule.module.css'

import DayPlan from '../../components/tripschedule/DayPlan'
import DayPlanEditMode from '../../components/tripschedule/DayPlanEditMode'
import SelectedPlaceList from '../../components/tripschedule/SelectedPlaceList'
import GoogleMapDay2 from '../../components/tripschedule/googleMap_rev/GoogleMapDay2'
import CitiesData from './tripschedule-details/tipschedule1/CitiesData'

export default function EditTripSchedule() {
	//파라미터에서 데이터 가져옴
	const { scheduleId } = useParams()
	const navigate = useNavigate()
	console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!scheduleId = ' + scheduleId)

	/* state 시작*/
	const [winReady, setWinReady] = useState(false) //window가 로드 된 시점에서 <Map/> 랜더링 하기 위함
	const [dateList, setDateList] = useState([])
	const [editMode, setEditMode] = useState(false) //편집모드 전환
	const [selectedDay, setSelectedDay] = useState(1)
	const [selectedCity, setSelectedCity] = useState({})

	const [planList, planListHandler] = useState({})
	const [modalDormList, setModalDormList] = useState([]) //[{}, {}, {}]
	const [modalPlaceList, setModalPlaceList] = useState([]) //[{}, {}, {}]
	/* state 끝*/

	// useEffect[1] back-end에서 화면에 띄울 데이터 fetch해옴
	useEffect(() => {
		setWinReady(true)

		axios
			.get('/tripschedule/info', {
				params: {
					scheduleId: scheduleId,
					// scheduleId: 2,
				},
			})
			.then(function (res) {
				const selectedCity = CitiesData.filter((item) => item.areaTitle === res.data.areaTitle)

				console.log('selectedCity 객체===================')
				console.log(selectedCity)
				console.log(selectedCity[ 0 ])
				console.log(selectedCity[ 0 ].mapLat)

				setSelectedCity(selectedCity[ 0 ])
				

				// setDateList((prevState) => {
				// 	const updatedState = res.data.dateList
				// 	// setDateList 실행이 완료된 후 planListHandler를 호출합니다.
				// 	Promise.resolve(updatedState).then(() => {
				// 		planListHandler(res.data.planList)
				// 	})
				// 	return updatedState
				// })

				
				setDateList(res.data.dateList) //배열로 받음
				planListHandler(res.data.planList) //객체 안에 배열안에 객체
				console.log(res.data.planList)

				console.log('get_info 성공')
			})
			.catch(function (error) {
				console.log('get_info 실패', error)
			})
	}, [])

	
	// useEffect[2]
	useEffect(() => {
		/*모달창에 띄울 쓸 숙박, 장소 item들 정보 받아옴*/
		//sigunguCode = [] 이면 데이터 못 받아옴 -> 수정해야 함.

		//숙박
		selectedCity.areaCode &&
			axios
				.get('/tripschedule/dormInfo', {
					params: {
						areaCode: selectedCity?.areaCode, //Ex.32
						sigunguCodeList: selectedCity?.sigunguCode.length > 0 ? selectedCity?.sigunguCode?.join(',') : 0, // Ex. 1,5,7 /없으면 0
					},
				})
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

	
	/*
	useEffect(() => {
		console.log(dateList)

		// dateList에 따라 planList = {1: [{}, {}, {}, {}], 2: [], 3: []} 식으로 초기화 한다.
		let initObj = {}
		dateList?.map((_, index) => {
			initObj[index + 1] = []
		})

		// if (Object.keys(planList).length == 0) {
			
			// planListHandler(initObj)                           
		// }
	}, [dateList])*/

	//[편집 완료] 버튼 눌렀을 때 백으로 일정 Data 보냄.
	const updateTripSchedule = () => {
		const requestBody = {
			planList: planList,
			dateList: dateList,
			// cityName: selectedCity.areaTitle,
			scheduleId: scheduleId
		}

		axios
			.post('/tripschedule/infoUpdate', requestBody)
			.then(function (response) {
				console.log('updateTripSchedule  성공')
			})
			.catch(function (error) {
				console.log('updateTripSchedule  실패', error)
			})
		
		alert("일정 편집이 완료되었습니다.")
		navigate('/mypage')
	}

	return (
		<div className={style['container']}>
			{/* 수정하기 버튼 */}
			<button className={style['save-button']} onClick={updateTripSchedule}>
				편집 완료
			</button>
			{/* 사이드바 */}
			<div className={style['sidebar']}>
				<div className={style['sidebar-title']}>
					<p className={style['trip-title']}>{ReactHtmlParser(selectedCity.areaTitle)} 여행</p>
					<p className={style['travel-period']}>{dateList && dateList[0] + '~' + dateList[dateList.length - 1]}</p>
				</div>
				<Scrollbars
					style={{ height: '100%', width: '100%' }}
					thumbSize={120}
					autoHide
					autoHideTimeout={1000}
					autoHideDuration={1000}
					renderTrackHorizontal={(props) => <div {...props} className={style['track-horizontal']} />}
					renderThumbHorizontal={(props) => <div {...props} className={style['thumb-horizontal']} />}>
					{/* Day1, 2, 3... 블록 */}
					<div className={style['dayplan-wrapper']}>
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
										modalDormList={modalDormList}
										modalPlaceList={modalPlaceList}
									/>
							  ))}
					</div>
				</Scrollbars>
			</div>

			{/* 구글맵 */}
			{/* selectedCity를 백엔드에서 받아오면 google map을 렌더링함. */}
			<div className={style['map']}>
				{/* {selectedCity !== {} ? <GoogleMapDay2 planList={planList && planList[selectedDay]} selectedCity={selectedCity} /> : null} */}
				{Object.keys(selectedCity).length > 0 && <GoogleMapDay2 planList={planList && planList[selectedDay]} selectedCity={selectedCity} />}
			</div>

			{/* 선택한 장소 목록*/}
			<SelectedPlaceList planList={planList} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
		</div>
	)
}
