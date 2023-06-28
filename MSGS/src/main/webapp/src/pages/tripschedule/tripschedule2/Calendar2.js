import { addDays, format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { Link } from 'react-router-dom';
import ko from 'date-fns/locale/ko';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import styles from './Calendar2.module.css';
import FlightAroundTrip from "../../flight/flight-search/FlightAroundTrip";

const Calendar2 = ({ onClose, onDateSelect }) => {
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
    key: 'selection',
  });

  const [isOpen, setIsOpen] = useState(true);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleSelectComplete = () => {
    onDateSelect(state.startDate, state.endDate);
    onClose();
  };

  const handlerState = (item) => {
    setState(item);
  };

  return (
    <>
      {isOpen && (
        <div className={styles["calender-wrap"]}>
          <div className={[styles["modal-head-wrap"], styles["head-wrap"]].join(" ")}>
            <h1 className={styles["modal-title"]}>날짜 선택</h1>
            <span onClick={handleCloseClick}>
              <img src={process.env.PUBLIC_URL + '/images/icon_close.png'} alt="icon_close" />
            </span>
          </div>
          <div className={styles["calender-date-wrap"]}>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => handlerState(item.selection)}
              moveRangeOnFirstSelection={false}
              ranges={[state]}
              months={2}
              minDate={addDays(new Date(), 0)}
              direction='horizontal'
              rangeColors={['#9BCDD2']}
              locale={ko}
            />
            <div className={styles['trip-schedule-add-modal-select-complete']}>
            <button
              className={styles['trip-schedule-add-modal-select-complete-button']}
              onClick={handleSelectComplete}
            >
              선택완료 ({format(state.startDate, 'yyyy-MM-dd')} ~ {format(state.endDate, 'yyyy-MM-dd')})
            </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default Calendar2;
