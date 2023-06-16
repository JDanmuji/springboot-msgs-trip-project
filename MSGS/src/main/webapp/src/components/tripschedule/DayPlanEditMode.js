import React, { useState, useEffect } from 'react'
import style from './DayPlan.module.css'
import ScheduleLineAndBlock from './ScheduleLineAndBlock'

export default function DayPlan({ orderDay, date, setEditMode }) {
	//일정 블록들을 저장한 배열
	const [planList, setPlanList] = useState([
		{ order: 1, placeOrder: 1, type: 'place', title: '경포 해변1', subtitle: '관광명소 · 강릉' },
		{ order: 2, placeOrder: 2, type: 'place', title: '경포 해변2', subtitle: '관광명소 · 강릉' },
		{ order: 3, placeOrder: null, type: 'dorm', title: '조선 웨스턴 호텔', subtitle: '숙소 · 강릉' },
		{ order: 4, placeOrder: null, type: 'memo', title: '중간에 야시장 갈 수 있음', subtitle: null },
		{
			order: 5,
			placeOrder: 3,
			type: 'place',
			title: '에디슨 과학 박물관 & 참소리 축음기',
			subtitle: '관광명소 · 강릉',
		},
	])

	// const planBlock = [
	// 	{ order: 1, placeOrder: 1, type: 'place', title: '경포 해변1', subtitle: '관광명소 · 강릉' },
	// 	{ order: 2, placeOrder: 2, type: 'place', title: '경포 해변2', subtitle: '관광명소 · 강릉' },
	// { order: 3, placeOrder: null, type: 'dorm', title: '조선 웨스턴 호텔', subtitle: '숙소 · 강릉' },
	// { order: 4, placeOrder: null, type: 'memo', title: '중간에 야시장 갈 수 있음', subtitle: null },
	// {
	// 	order: 5,
	// 	placeOrder: 3,
	// 	type: 'place',
	// 	title: '에디슨 과학 박물관 & 참소리 축음기',
	// 	subtitle: '관광명소 · 강릉',
	// },
	// ]

	// useEffect(() => addPlanBlock(planBlock), [])
	//const addPlanBlock = (planBlock) => setPlanList([...planList, planBlock])

	/*편집 버튼 눌렀을 때*/
	const toggleEditMode = () => {
		setEditMode(prevMode => !prevMode)
	}

	/*장소 추가 버튼 눌렀을 때*/
	const addPlaceBlock = () => {}

	/*메모 추가 버튼 눌렀을 때*/
	const addMemoBlock = () =>
		setPlanList([
			...planList,
			{ order: planList.length + 1, placeOrder: null, type: 'memo', title: '', subtitle: null },
		])

	return (
		<div className={style['dayplan']}>
			<div className={style['day-title-wrapper']}>
				<p className={style['day-title']}>
					<span className={style['text-first']}>DAY {orderDay}</span>
					<span className={style['text-second']}>{date}</span>
				</p>
				{orderDay === 1 && ( //DAY1 블록일 경우 편집버튼 추가함.
					<div className={style['edit-button-wrapper']} onClick={toggleEditMode}>
						<img
							className={style['edit-button']}
							src={process.env.PUBLIC_URL + 'images/icon_edit_pencil.png'}
							alt='icon_edit_pencil'></img>
						<span className={style['edit-button-text']}>편집</span>
					</div>
				)}
			</div>
			<div className={style['schedule-block-wrapper']}>
				{/* 라인과 블록 쌍 컴포넌트들이 들어감 */}
				{planList.map((item, index) => (
					<ScheduleLineAndBlock
						key={index}
						order={item.order}
						placeOrder={item.placeOrder}
						type={item.type}
						title={item.title}
						subtitle={item.subtitle}
					/>
				))}

				{/* 라인과 블록 쌍 끝 */}
			</div>

			<div className={style['button-wrapper']}>
				{/* 모달창 띄워야 함 */}
				<button className={style['button-add-place']} onClick={addPlaceBlock}>
					장소 추가
				</button>
				<button className={style['button-add-memo']} onClick={addMemoBlock}>
					메모 추가
				</button>
			</div>
		</div>
	)
}
