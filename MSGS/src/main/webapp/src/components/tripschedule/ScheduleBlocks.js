import React from 'react'
import style from './ScheduleBlocks.module.css'
import ScheduleLineAndBlock from './ScheduleLineAndBlock'

export default function ScheduleBlocks() {
	return (
		<div className={style["schedule-block-wrapper"]}>
			{/* 라인과 블록 쌍 */}
			<ScheduleLineAndBlock order={1} type={'place'} title={'경포 해변'} subtitle={'관광명소 · 강릉'} />
			<ScheduleLineAndBlock order={2} type={'place'} title={'경포 해변'} subtitle={'관광명소 · 강릉'} />
			<ScheduleLineAndBlock order={null} type={'dorm'} title={'조선 웨스턴 호텔'} subtitle={'숙소 · 강릉'} />
			<ScheduleLineAndBlock
				order={3}
				type={'place'}
				title={'에디슨 과학 박물관 & 참소리 축음기'}
				subtitle={'숙소 · 강릉'}
			/>
			{/* 라인과 블록 쌍 끝 */}
		</div>
	)
}
