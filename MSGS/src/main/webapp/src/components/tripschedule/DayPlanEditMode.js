import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import style from './DayPlanEditMode.module.css'
import EditModeBlock from './EditModeBlock'

export default function DayPlanEditMode({ orderDay, date, planList, planListHandler, setEditMode, selectedDay }) {
	//window가 로드 된 시점에서 렌더링함.
	const [winReady, setWinReady] = useState(false)
	useEffect(() => {
		setWinReady(true)
	}, [])

	/*완료 버튼 눌렀을 때 -> 블록 추가 모드로 전환*/
	const toggleEditMode = () => {
		setEditMode((prevMode) => !prevMode)
	}

	/*거리순 재정렬 버튼 눌렀을 때*/
	const rearrangeBlockByDistance = () => {}

	/*일정 삭제 버튼 눌렀을 때*/
	function deleteBlock() {
		planListHandler((prevList) => {
			// 1-체크된 블록들 리스트에서 지움.
			const prevListItemsDeleted = prevList[orderDay]?.filter((item) => item.isChecked === false)
			// 2-변경된 순서에 맞게 order와 placeOrder값을 재할당
			let prevPlaceOrder = 0
			return (
				prevListItemsDeleted &&
				prevListItemsDeleted.map((item, index) => {
					prevPlaceOrder = item.placeOrder ? prevPlaceOrder + 1 : prevPlaceOrder
					return { ...item, order: index + 1, placeOrder: item.placeOrder ? prevPlaceOrder : null }
				})
			)
		})
	}

	// 드래그앤드롭 완료 후 동작
	const handleDragEnd = (result) => {
		const items = [...planList[selectedDay]]
		const [reorderedItem] = items.splice(result.source.index, 1)
		items.splice(result.destination.index, 0, reorderedItem)
		planListHandler(items)
	}

	//완료 버튼 눌렀을 때 동작
	const completeModify = () => {
		// 1-변경된 순서에 맞게 planListdml order와 placeOrder값을 재할당
		planListHandler((prevList) => {
			let prevPlaceOrder = 0
			return (
				Object.keys(prevList[orderDay]).length > 0 &&
				prevList[orderDay]?.map((item, index) => {
					prevPlaceOrder = item.placeOrder ? prevPlaceOrder + 1 : prevPlaceOrder
					return { ...item, order: index + 1, placeOrder: item.placeOrder ? prevPlaceOrder : null }
				})
			)
		})

		// 2-블록 추가 모드로 전환
		toggleEditMode()
	}

	return (
		<div className={style['dayplan-edit-mode']}>
			<div className={style['day-title-wrapper']}>
				<p className={style['day-title']}>
					<span className={style['text-first']}>DAY {orderDay}</span>
					<span className={style['text-second']}>{date}</span>
				</p>
				{orderDay === 1 && ( //DAY1 블록일 경우 완료버튼 추가함.
					<div className={style['edit-button-wrapper']} onClick={completeModify}>
						<img
							className={style['edit-button']}
							src={process.env.PUBLIC_URL + 'images/icon_edit_pencil.png'}
							alt='icon_edit_pencil'></img>
						<span className={style['edit-button-text']}>완료</span>
					</div>
				)}
			</div>

			{winReady ? ( //window가 로드 된 시점에서 렌더링함.
				<DragDropContext onDragEnd={handleDragEnd}>
					{/* 드랍 가능한 영역 */}
					<Droppable droppableId={'blocks_' + orderDay}>
						{(provided) => (
							<div {...provided.droppableProps} ref={provided.innerRef} className={style['schedule-block-wrapper']}>
								{/* 라인과 블록 쌍 컴포넌트 들이 들어감 */}
								{planList[selectedDay] &&
									planList[selectedDay].map((item, index) => (
										// <Draggable key={index + 1} draggableId={item.order.toString()} index={index}>
										<Draggable key={index + 1} draggableId={index.toString()} index={index}>
											{(provided) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													// {...provided.dragHandleProps}
													className={style['edit-block-wrapper']}>
													<EditModeBlock
														key={index + 1}
														order={item.order}
														placeOrder={item.placeOrder}
														type={item.type}
														title={item.title}
														subtitle={item.subtitle}
														isChecked={item.isChecked}
														planListHandler={planListHandler}
														provided={provided}
													/>
												</div>
											)}
										</Draggable>
									))}
								{provided.placeholder}
								{/* 라인과 블록 쌍 끝 */}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			) : null}

			<div className={style['button-wrapper']}>
				<button className={style['button-rearrange-by-distance']} onClick={rearrangeBlockByDistance}>
					거리순 재정렬
				</button>
				<button className={style['button-delete-block']} onClick={deleteBlock}>
					일정 삭제
				</button>
			</div>
		</div>
	)
}
