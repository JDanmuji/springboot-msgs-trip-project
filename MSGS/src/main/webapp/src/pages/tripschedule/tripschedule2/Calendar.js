import { addDays, differenceInCalendarDays, format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styles from './Calendar.module.css'; // import the CSS module

const Calendar = () => {
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
          months={2}
          direction="horizontal"
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
};

export default Calendar;
