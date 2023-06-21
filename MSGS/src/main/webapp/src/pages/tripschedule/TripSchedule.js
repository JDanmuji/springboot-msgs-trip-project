import React, { useState, useEffect, useRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
<<<<<<< HEAD
=======
import { useQuery, useQueryClient } from 'react-query'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import axios from 'axios'
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b

import style from './TripSchedule.module.css'

import DayPlan from '../../components/tripschedule/DayPlan'
import DayPlanEditMode from '../../components/tripschedule/DayPlanEditMode'
<<<<<<< HEAD
import SelectedPlace from '../../components/tripschedule/SelectedPlace'
import Map from '../../components/tripschedule/Map'

// export default function TripSchedule({ dateList}) {    <-전 페이지에서 dateList 받아오면.
export default function TripSchedule() {
  //window가 로드 된 시점에서 렌더링함.
  const [ winReady, setWinReady ] = useState(false)
  useEffect(() => {
    setWinReady(true)
  }, [])

  const dateList = [ '2023.6.22', '2023.6.23', '2023.6.24' ]
=======
import Map from '../../components/tripschedule/Map'
import SelectedPlaceList from '../../components/tripschedule/SelectedPlaceList'

// export default function TripSchedule({ city:{cityName, areaCode, sigunguCode}}) { <-전 페이지에서 도시 이름, 지역코드 받아오면.
export default function TripSchedule() {

	//전 페이지에서 보낸 startDate와 endDate 받음.
	const location = useLocation()
	//const startDate = location.state.startDate
	//const endDate = location.state.endDate

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
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b

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
<<<<<<< HEAD
		{
			order: 6,
			placeOrder: 4,
			isChecked: false,
			type: 'place',
			title: '참소리 축음기',
			subtitle: '관광명소 · 강릉',
		},
	])

	const [scrollPosition, setScrollPosition] = useState(0) // 현재 스크롤 위치
	const containerRef = useRef(null) // React 컴포넌트에서 DOM 요소에 접근하기 위해 사용

	const [showPrevButton, setShowPrevButton] = useState(false) // slide 왼쪽 이동 버튼 show 
	const [showNextButton, setShowNextButton] = useState(false) // slide 오른쪽 이동 버튼 show

  //장소, 숙소 
  useEffect(() => {
    if (planList.filter(item => item.type !== 'memo').length > 4) { 
      setShowNextButton(true)
    }
  }, [ planList ]);
  

	const prevBtnHandler = () => {
		const container = containerRef.current
		if (container) {
			const scrollOffset = 2000 // 클릭 당 스크롤 이동 범위
			container.scrollTo({
				// 컨테이너 스크롤
				left: scrollPosition - scrollOffset, // 현재 위치 - 클릭 당 스크롤 이동 범위
				behavior: 'smooth',
			})
			setScrollPosition(scrollPosition - scrollOffset) // state 업데이트
		}
	}

  const nextBtnHandler = () => {
      const container = containerRef.current
      if (container) {
        const scrollOffset = 2000
        container.scrollTo({
          left: scrollPosition + scrollOffset,
          behavior: 'smooth',
        })
        setScrollPosition(scrollPosition + scrollOffset)
        setShowPrevButton(true)
      }
	}

	/*편집모드 전환*/
	const [editMode, setEditMode] = useState(false)

	return (
		<div className={style['container']}>
			{/* 사이드바 Start */}
=======
		{ order: 6, placeOrder: 4, isChecked: false, type: 'place', title: '참소리 축음기', subtitle: '관광명소 · 강릉' },
	])

	return (
		<div className={style['container']}>
			{/* 사이드바 */}
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
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
<<<<<<< HEAD
=======
										cityName={cityName}
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
									/>
							  ))}
					</div>
				</Scrollbars>
			</div>
<<<<<<< HEAD
			{/* 사이드바 End */}

			{/* 구글맵 Start */}
=======

			{/* 구글맵 */}
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
			<div className={style['map']}>
				{/* //window가 로드 된 시점에서 google map을 렌더링함. */}
				{winReady ? <Map /> : null}
			</div>
<<<<<<< HEAD
			{/* 구글맵 End */}

			{/* 선택한 장소 목록 Start */}
			<div className={style['selected-place']}>
				<div className={style['day-wrapper']}>
					<button
						className={style['day-button']}
						style={{ color: 'white', backgroundColor: '#fc7300', border: 'solid 1px #fc7300' }}>
						DAY1
					</button>
					<button className={style['day-button']}>DAY2</button>
					<button className={style['day-button']}>DAY3</button>
				</div>

				<div className={style['selected-item-container']}>
					<div className={style['slide-prev-btn-wrapper']} onClick={prevBtnHandler}>
						{showPrevButton && (
							<img
								src={process.env.PUBLIC_URL + '/images/icon_arrow_left_orange.png'}
								alt='arrow_orange'
								className={style['slide-btn']}
							/>
						)}
					</div>
					<div className={style['selected-item-wrapper']} ref={containerRef}>
						{planList
							.filter((item) => item.type !== 'memo')
							.map((item, index) => (
								<SelectedPlace key={index + 1} order={index + 1} planList={item} />
							))}
					</div>
					{showNextButton && (
						<div className={style['slide-next-btn-wrapper']} onClick={nextBtnHandler}>
							<img
								src={process.env.PUBLIC_URL + '/images/icon_arrow_right_orange.png'}
								alt='arrow_orange'
								className={style['slide-btn']}
							/>
						</div>
					)}
				</div>
			</div>
			{/* 선택한 장소 목록 End */}
=======

			{/* 선택한 장소 목록*/}
			<SelectedPlaceList planList={planList} />
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
		</div>
	)
}
