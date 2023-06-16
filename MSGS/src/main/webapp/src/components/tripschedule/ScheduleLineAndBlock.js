import React from 'react'
import style from './ScheduleLineAndBlock.module.css'

export default function ScheduleLineAndBlock({ order, placeOrder, type, title, subtitle }) {
	function resultHtml() {
		if (type === 'memo') {
			//메모 블록을 추가하는 경우
			return (
				<div className={style['order-memo-label-wrapper']}>
					<div className={style['order-memo-label']}></div>
				</div>
			)
		} else if (order === 1) {
			//첫번째로 들어오는 장소블록일 경우
			return type === 'dorm' ? (
				<div className={style['order-dorm-label-wrapper']}>
					<div className={style['order-dorm-label']}></div>
				</div>
			) : (
				<div className={style['order-label-wrapper']}>
					<div className={style['order-label']}>{placeOrder}</div>
				</div>
			)
		} else {
			//중간 or 끝에 들어오는 블록
			return type === 'dorm' ? (
				<>
					<div className={style['order-dorm-label-wrapper']}>
						<div className={style['order-dorm-label']}></div>
					</div>
					<div className={style['distance-label-wrapper']}>
						<div className={style['distance-label']}>1.6km</div>
					</div>
				</>
			) : (
				<>
					<div className={style['order-label-wrapper']}>
						<div className={style['order-label']}>{placeOrder}</div>
					</div>
					<div className={style['distance-label-wrapper']}>
						<div className={style['distance-label']}>1.6km</div>
					</div>
				</>
			)
		}
	}

	return (
		<div className={style['line-and-block-wrapper']}>
			<div className={style['schedule-line-wrapper']}>
				<div className={style['schedule-line-left']}>{resultHtml()}</div>
				<div className={style['schedule-line-right']}></div>
			</div>

			<div className={style[ 'schedule-block' ]} onClick={() => window.open('http://localhost:3000/tripLoc', '_blank')}>
				{type === 'memo'
					? <p className={style[ 'text-memo' ]}>{title}</p>
					: <p className={style[ 'text-place' ]}>{title}</p>
				}
				
				<p className={style['text-place-type']}>{subtitle}</p>
			</div>
		</div>
	)
}
