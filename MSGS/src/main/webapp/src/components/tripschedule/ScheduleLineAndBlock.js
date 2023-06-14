import React from 'react'
import style from './ScheduleLineAndBlock.module.css'

export default function ScheduleLineAndBlock({ order, type, title, subtitle }) {
	function resultHtml() {
		if (order === 1) {
			//첫번째로 들어오는 장소블록일 경우
			return type === 'dorm' ? (
				<div className={style["order-dorm-label-wrapper"]}>
					<div className={style["order-dorm-label"]}></div>
				</div>
			) : (
				<div className={style["order-label-wrapper"]}>
					<div className={style["order-label"]}>{order}</div>
				</div>
			)
		} else {
			//중간 or 끝에 들어오는 블록
			return type === 'dorm' ? (
				<>
					<div className={style["order-dorm-label-wrapper"]}>
						<div className={style["order-dorm-label"]}></div>
					</div>
					<div className={style["distance-label-wrapper"]}>
						<div className={style["distance-label"]}>1.6km</div>
					</div>
				</>
			) : (
				<>
					<div className={style["order-label-wrapper"]}>
						<div className={style["order-label"]}>{order}</div>
					</div>
					<div className={style["distance-label-wrapper"]}>
						<div className={style["distance-label"]}>1.6km</div>
					</div>
				</>
			)
		}
	}

	return (
		<div className={style["line-and-block-wrapper"]}>
			<div className={style["schedule-line-wrapper"]}>
				<div className={style["schedule-line-left"]}>{resultHtml()}</div>
				<div className={style["schedule-line-right"]}></div>
			</div>

			<div className={style["schedule-block"]}>
				<p className={style["text-place"]}>{title}</p>
				<p className={style["text-place-type"]}>{subtitle}</p>
			</div>
		</div>
	)
}
