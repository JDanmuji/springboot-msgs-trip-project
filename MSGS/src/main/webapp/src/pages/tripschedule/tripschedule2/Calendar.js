import { addDays, differenceInCalendarDays, format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { Link } from 'react-router-dom'
import ko from 'date-fns/locale/ko'; // 한국어
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styles from './Calendar.module.css'; // import the CSS module
import FlightAroundTrip from "../../flight/flight-search/FlightAroundTrip";

const Calendar = () => {
	const [state, setState] = useState({
		startDate: new Date(),
		endDate: addDays(new Date(), 1),
		key: 'selection',
	})

	const formatDates = (startDate, endDate) => {
		const formattedStartDate = format(startDate, 'yyyy.MM.dd')
		const formattedEndDate = format(endDate, 'yyyy.MM.dd')
		return `${formattedStartDate} ~ ${formattedEndDate}`
	}

	const calculateDuration = (startDate, endDate) => {
		const days = differenceInCalendarDays(endDate, startDate) + 1
		const nights = days - 1
		return `${nights}박 ${days}일`
	}

	return (
		<div className={`${styles.calendarContainer}  ${styles.small}`}>
			<div className={styles.durationContainer}>
				<div key={state.startDate}>
					{/* <h1>
						<strong>{calculateDuration(state.startDate, state.endDate)}</strong>
						<br />
						<br />
					</h1> */}
				</div>
			</div>

			<div className={styles.dateRangeContainer}>
				<DateRange
					editableDateInputs={true}
					onChange={(item) => setState(item.selection)}
					moveRangeOnFirstSelection={false}
					ranges={[state]}
					months={2} // 2달
					direction='horizontal'
					rangeColors={['#c7c7c7']} // 선택 시, 색깔
					locale={ko} // 한국어
				/>
			</div>

      <Link to={'/tripschedule'} state={{
        startDate: format(state.startDate, 'yyyy.MM.dd'),
        endDate: format(state.endDate, 'yyyy.MM.dd'),
      }}>
				<div className={styles['trip-schedule-add-modal-select-complete']}>
					<button className={styles['trip-schedule-add-modal-select-complete-button']}>
						<h4 key={state.startDate} style={{ textAlign: 'center' }}>
							<br />
							{formatDates(state.startDate, state.endDate)} / 등록 완료
						</h4>
					</button>
				</div>
			</Link>
			<FlightAroundTrip startDate={state.startDate} endDate={state.endDate}/>
		</div>
	)
};

export default Calendar;
