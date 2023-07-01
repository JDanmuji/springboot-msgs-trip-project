import React, { useState} from 'react'
import style from './DayPlan.module.css'

import ScheduleLineAndBlock from './ScheduleLineAndBlock'
import TripScheduleAddModal from './modal/TripScheduleAddModal'

export default function DayPlan({
	orderDay,
	date,
	planList,
	planListHandler,
	setEditMode,
	modalDormList,
	modalPlaceList,
}) {
	// 장소 추가모달창 state
	const [addPlaceModal, setAddPlaceModal] = useState(false)

	// 장소 추가 버튼 눌렀을 때 -> 장소모달창 노출
	const showAddPlaceModal = () => {
		setAddPlaceModal(true)
	}

	/*편집 버튼 눌렀을 때*/
	const toggleEditMode = () => {
		setEditMode((prevMode) => !prevMode)
	}

	/*메모 추가 버튼 눌렀을 때*/
	const addMemoBlock = () => {
		planListHandler((prevObj) => {
			const updatedObj = { ...prevObj }

			updatedObj[ orderDay ].push({ order: updatedObj[ orderDay ].length + 1, placeOrder: null, type: 'memo', title: '', /*subtitle: null,*/ isChecked: false })
			return updatedObj;
			
		})
	}

	return (
		<div className={style['dayplan']}>
			<div className={style['day-title-wrapper']}>
				<p className={style['day-title']}>
					<span className={style['text-first']}>DAY {orderDay}</span>
					<span className={style['text-second']}>{date}</span>
				</p>
				{orderDay === 1 && ( //DAY1 블록일 경우 편집버튼 추가함.
					<div className={style['edit-button-wrapper']} onClick={toggleEditMode}>
						{/* <img className={style['edit-button']} src={process.env.PUBLIC_URL + 'images/icon_edit_pencil.png'} alt='icon_edit_pencil'></img> */}
						<img className={style['edit-button']} src={process.env.PUBLIC_URL + '/images/icon_edit_pencil.png'} alt='icon_edit_pencil'></img>
						<span className={style['edit-button-text']}>편집</span>
					</div>
				)}
			</div>
			<div className={style['schedule-block-wrapper']}>
				{/* 라인과 블록 쌍 컴포넌트들이 들어감 */}
				{planList[orderDay]?.map((item, index) => (
					<ScheduleLineAndBlock
						key={index + 1}
						orderDay={orderDay}
						order={item.order}
						placeOrder={item.placeOrder}
						type={item.type}
						title={item.title}
						location={item.location}
						areaCode={item.areacode}
						contenttypeid={item.contenttypeid}
						contentid={item.contentid}
						mapx={item.mapx}
						mapy={item.mapy}
						planList={planList}
						planListHandler={planListHandler}
					/>
				))}
				{/* 라인과 블록 쌍 끝 */}
			</div>

			<div className={style['button-wrapper']}>
				<button className={style['button-add-place']} onClick={showAddPlaceModal}>
					장소 추가
				</button>
				{/* 모달창 띄움 */}
				{addPlaceModal && (
					<TripScheduleAddModal
						orderDay={orderDay}
						planList={planList}
						planListHandler={planListHandler}
						setAddPlaceModal={setAddPlaceModal}
						modalDormList={modalDormList}
						modalPlaceList={modalPlaceList}
					/>
				)}

				<button className={style['button-add-memo']} onClick={addMemoBlock}>
					메모 추가
				</button>
			</div>
		</div>
	)
}
