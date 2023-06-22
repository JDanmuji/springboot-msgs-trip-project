import React from 'react'
import style from './EditModeBlock.module.css'

export default function EditModeBlock({
	provided,
	order,
	placeOrder,
	type,
	title,
	subtitle,
	isChecked,
	planListHandler,
	selectedDay,
}) {
	const checkHandler = () => {
		planListHandler((prevList) =>
			prevList[order].map((item) => {
				if (item.order === order) {
					return { ...item, isChecked: !item.isChecked }
				}
				return { ...item }
			})
		)
	}

	return (
		// <div className={style['edit-block-wrapper']}>
		<>
			<div className={style['block-checkbox-wrapper']} onClick={checkHandler}>
				<div className={`${style['check-div']} ${isChecked ? style['checked'] : ''}`}>
					{isChecked && <img src={process.env.PUBLIC_URL + '/images/icon_check.png'} alt='icon_check' />}
				</div>
			</div>

			<div className={style['schedule-block']}>
				{type === 'memo' ? (
					<p className={style['text-memo']}>{title}</p>
				) : (
					<p className={style['text-place']}>{title}</p>
				)}
				<p className={style['text-place-type']}>{subtitle}</p>
			</div>
			<div className={style['drag-handle-wrapper']} {...provided.dragHandleProps}>
				<img
					className={style['icon-drag-handle']}
					src={process.env.PUBLIC_URL + '/images/icon_drag_handle.png'}
					alt='icon_drag_handle'
				/>
			</div>
		</>
		// </div>
	)
}
