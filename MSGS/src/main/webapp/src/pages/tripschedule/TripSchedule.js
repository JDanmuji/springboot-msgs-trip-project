import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import style from './TripSchedule.module.css'

import DayPlan from '../../components/tripschedule/DayPlan'
import DayPlanEditMode from '../../components/tripschedule/DayPlanEditMode'
import SelectedPlace from '../../components/tripschedule/SelectedPlace'
import Map from '../../components/tripschedule/Map'

// export default function TripSchedule({ dateList}) {    <-전 페이지에서 dateList 받아오면.
export default function TripSchedule() {
	const dateList = ['2023.6.22', '2023.6.23', '2023.6.24']

	/*편집모드 전환*/
	const [ editMode, setEditMode ] = useState(false);

	return (
		<div className={style['container']}>
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
						{editMode === true
							? //편집모드인 경우
							  dateList.map((item, index) => (
									<DayPlan key={index} orderDay={index + 1} date={item} setEditMode={setEditMode} />
							  ))
							: //편집모드가 아닌 경우
							  dateList.map((item, index) => (
									<DayPlanEditMode key={index} orderDay={index + 1} date={item} setEditMode={setEditMode} />
							  ))}
					</div>
				</Scrollbars>
			</div>

			<div className={style['map']}>
				<Map />
			</div>

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

				<div className={style['selected-item-wrapper']}>
					<SelectedPlace order={1} />
					<SelectedPlace order={2} />
					<SelectedPlace order={3} />
					<SelectedPlace order={4} />
				</div>
			</div>
		</div>
	)
}
