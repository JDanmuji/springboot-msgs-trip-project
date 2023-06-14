import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import style from './TripSchedule.module.css'

import DayPlan from '../../components/tripschedule/DayPlan'
import SelectedPlace from '../../components/tripschedule/SelectedPlace'
import Map from '../../components/tripschedule/Map'

export default function TripSchedule() {
	// const mapElement = useRef(null)

	// useEffect(() => {
	// 	const { naver } = window
	// 	if (!mapElement.current || !naver) return

	// 	// 지도에 표시할 위치의 위도와 경도 넣어줌.
	// 	const location = new naver.maps.LatLng(37.7189, 128.8321)
	// 	const mapOptions = {
	// 		center: location,
	// 		zoom: 12,
	// 		zoomControl: true,
	// 		zoomControlOptions: {
	// 			position: naver.maps.Position.TOP_RIGHT,
	// 		},
	// 	}
	// 	const map = new naver.maps.Map(mapElement.current, mapOptions)
	// 	new naver.maps.Marker({
	// 		position: location,
	// 		map,
	// 	})
	// }, [])

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
					<div className={style['dayplan-wrapper']}>
						{/*DAY1*/}
						<DayPlan orderDay={1} date={'6.22/목'} />
						{/*DAY2*/}
						<DayPlan orderDay={2} date={'6.23/금'} />
						{/*DAY3*/}
						<DayPlan orderDay={3} date={'6.24/토'} />
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
