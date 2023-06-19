import React, { useState, useEffect, useRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import style from './TripSchedule.module.css'

import DayPlan from '../../components/tripschedule/DayPlan'
import DayPlanEditMode from '../../components/tripschedule/DayPlanEditMode'
import SelectedPlace from '../../components/tripschedule/SelectedPlace'
import Map from '../../components/tripschedule/Map'

// export default function TripSchedule({ dateList}) {    <-전 페이지에서 dateList 받아오면.
export default function TripSchedule() {
	//window가 로드 된 시점에서 렌더링함.
	const [winReady, setWinReady] = useState(false)
	useEffect(() => {
		setWinReady(true)
	}, [])

	const dateList = ['2023.6.22', '2023.6.23', '2023.6.24']

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
									/>
							  ))}
					</div>
				</Scrollbars>
			</div>
			{/* 사이드바 End */}

			{/* 구글맵 Start */}
			<div className={style['map']}>
				{/* //window가 로드 된 시점에서 google map을 렌더링함. */}
				{winReady ? <Map /> : null}
			</div>
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
		</div>
	)
}
