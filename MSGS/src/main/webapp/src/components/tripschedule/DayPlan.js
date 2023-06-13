import React from 'react'
import style from './DayPlan.module.css'
import ScheduleBlocks from './ScheduleBlocks'

export default function DayPlan() {
	return (
		<div className={style["dayplan"]}>
			<p className={style["day-title"]}>
				<span className={style["text-first"]}>DAY1</span>
				<span className={style["text-second"]}>6.22/목</span>
			</p>

			<div className={style["schedule-block-wrapper"]}>
				<ScheduleBlocks />
			</div>

			<div className={style["button-wrapper"]}>
				<button className={style["button-add-place"]}>장소 추가</button>
				<button className={style["button-add-memo"]}>메모 추가</button>
			</div>
		</div>
	)
}
