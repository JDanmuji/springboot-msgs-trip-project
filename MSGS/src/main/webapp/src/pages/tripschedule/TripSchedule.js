import React, { useState, useEffect, useRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useQuery, useQueryClient } from 'react-query'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import axios from 'axios'

import style from './TripSchedule.module.css'

import DayPlan from '../../components/tripschedule/DayPlan'
import DayPlanEditMode from '../../components/tripschedule/DayPlanEditMode'
import Map from '../../components/tripschedule/Map'
import SelectedPlaceList from '../../components/tripschedule/SelectedPlaceList'

// export default function TripSchedule({ city:{cityName, areaCode, sigunguCode}}) { <-전 페이지에서 도시 이름, 지역코드 받아오면.
export default function TripSchedule() {

	//전 페이지에서 보낸 startDate와 endDate 받음.
	const location = useLocation()
	const startDate = location.state.startDate
	const endDate = location.state.endDate

	//dateList 계산
	const getDatesStartToLast = (startDate, endDate) => {
		console.log(startDate + '~' + endDate)

		let result = []
		let curDate = new Date(startDate)
		while (curDate <= new Date(endDate)) {
			result.push(format(curDate, 'yyyy.MM.dd'))
			curDate.setDate(curDate.getDate() + 1)
		}
		//setDateList(result)
	}

	const [winReady, setWinReady] = useState(false) //window가 로드 된 시점에서 <Map/> 랜더링 하기 위함
	const queryClient = useQueryClient()
	// const [dateList, setDateList] = useState([])
	/*편집모드 전환*/
	const [editMode, setEditMode] = useState(false)

	//현재 컴포넌트가 마운트 됐을 때의 할 일.
	useEffect(() => {
		setWinReady(true)
		// 1. schedule2에서 보낸 startDate와 endDate가지고 dateList 만들음.
		//getDatesStartToLast(startDate, endDate)

		// 2. 선택한 도시에 맞는 숙박/장소 데이터 prefetch함.
		queryClient.prefetchQuery([cityName], () => {
			console.log(cityName + ' - fetching...')
			return axios.get(
				'http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=' +
					process.env.REACT_APP_TOUR_API_SERVICE_KEY +
					'&pageNo=1&numOfRows=50&MobileApp=AppTest&MobileOS=ETC&arrange=R&contentTypeId=32&_type=json&areaCode=31&sigunguCode=1'
			)
		})
	}, [])



	//임시 데이터
	const dateList = ['2023.6.22', '2023.6.23', '2023.6.24']
	const cityName = '가평, 양평'
	const areaCode = 31
	const sigunguCode = 1

	//일정 블록들을 저장한 배열
	const [planList, planListHandler] = useState([
		{ order: 1, placeOrder: 1, isChecked: false, type: 'place', title: '경포 해변1', subtitle: '관광명소 · 강릉' },
		{ order: 2, placeOrder: 2, isChecked: false, type: 'place', title: '경포 해변2', subtitle: '관광명소 · 강릉' },
		{ order: 3, placeOrder: null, isChecked: false, type: 'dorm', title: '조선 웨스턴 호텔', subtitle: '숙소 · 강릉' },
		{ order: 4, placeOrder: null, isChecked: false, type: 'memo', title: '중간에 야시장 갈 수 있음', subtitle: null },
		{
			order: 5,
			placeOrder: 3,
			isChecked: false,
			type: 'place',
			title: '에디슨 과학 박물관 ',
			subtitle: '관광명소 · 강릉',
		},
		{ order: 6, placeOrder: 4, isChecked: false, type: 'place', title: '참소리 축음기', subtitle: '관광명소 · 강릉' },
	])

	return (
		<div className={style['container']}>
			{/* 사이드바 */}
			<div className={style['sidebar']}>
				<div className={style['sidebar-title']}>
					<p className={style['trip-title']}>강릉 여행</p>
					<p className={style['travel-period']}>2023.6.22 ~ 6.28</p>
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
							  dateList.map((item, index) => (
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
							  dateList.map((item, index) => (
									<DayPlan
										key={index + 1}
										orderDay={index + 1}
										date={item}
										planList={planList}
										planListHandler={planListHandler}
										setEditMode={setEditMode}
										cityName={cityName}
									/>
							  ))}
					</div>
				</Scrollbars>
			</div>

			{/* 구글맵 */}
			<div className={style['map']}>
				{/* //window가 로드 된 시점에서 google map을 렌더링함. */}
				{winReady ? <Map /> : null}
			</div>

			{/* 선택한 장소 목록*/}
			<SelectedPlaceList planList={planList} />
		</div>
	)
}
