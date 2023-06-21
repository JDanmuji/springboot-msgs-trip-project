import { addDays, differenceInCalendarDays, format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom'
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
import ko from 'date-fns/locale/ko'; // 한국어
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styles from './Calendar.module.css'; // import the CSS module

const Calendar = () => {
<<<<<<< HEAD
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  ]);

  const formatDates = (startDate, endDate) => {
    const formattedStartDate = format(startDate, 'yyyy.MM.dd');
    const formattedEndDate = format(endDate, 'yyyy.MM.dd');
    return `${formattedStartDate} ~ ${formattedEndDate}`;
  };

  const calculateDuration = (startDate, endDate) => {
    const days = differenceInCalendarDays(endDate, startDate) + 1;
    const nights = days - 1;
    return `${nights}박 ${days}일`;
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.durationContainer}>
        {state.map(({ startDate, endDate }) => (
          <div key={startDate}>
            <h1><strong>{calculateDuration(startDate, endDate)}</strong><br/><br/></h1>
          </div>
        ))}
      </div>

      <div className={styles.dateRangeContainer}>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          months={2} // 2달
          direction="horizontal"
          rangeColors={["#F0F0F0"]} // 선택 시, 색깔
          locale={ko} // 한국어
        />
      </div>

      <div>
        
        <div className={styles['trip-schedule-add-modal-select-complete']}>
            <button className={styles['trip-schedule-add-modal-select-complete-button']}>
              {state.map(({ startDate, endDate }) => (
                <h4 key={startDate} style={{ textAlign: 'center' }}>
                  <br/>
                  {formatDates(startDate, endDate)} / 등록 완료
                </h4>
              ))}
            
            </button>
        </div>
    </div>


    </div>
  );
=======
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
		<div className={styles.calendarContainer}>
			<div className={styles.durationContainer}>
				<div key={state.startDate}>
					<h1>
						<strong>{calculateDuration(state.startDate, state.endDate)}</strong>
						<br />
						<br />
					</h1>
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
					rangeColors={['#F0F0F0']} // 선택 시, 색깔
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
		</div>
	)
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
};

export default Calendar;
