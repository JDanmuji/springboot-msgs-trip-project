import { addDays, differenceInCalendarDays, format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { Link } from 'react-router-dom'
import ko from 'date-fns/locale/ko'; // 한국어
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styles from './CalendarOneway.module.css'; // import the CSS module

const Calendar2 = ({ onClose, onDateSelect }, props) => {
    const [state, setState] = useState({
        startDate: new Date(),
        endDate: addDays(new Date(), 1),
        key: 'selection',

    });
    //캘린더 닫기
    const [isOpen, setIsOpen] = useState(true); // 모달 열림 상태
    const handleCloseClick = () => {
        setIsOpen(false); // 모달 닫기
    };

    const handleSelectComplete = () => {
        onDateSelect(state.startDate, state.endDate); // 선택 완료 시, 값을 부모 컴포넌트로 전달
        onClose();
        
      };
    return (
        <>
        {isOpen && ( // isOpen이 true일 때만 모달 표시
          <div className={`${styles.tripScheduleAddModal} ${styles.small}`}>
            <div className={styles.content}>
              <div className={styles.tripScheduleAddModalClose} onClick={handleCloseClick}>
                ✖️
              </div>
              <div className={`${styles.calendarContainer}  ${styles.small2}`}>
                <div className={styles.dateRangeContainer}>
                    <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setState(item.selection)}
                        moveRangeOnFirstSelection={false}
                        ranges={[state]}
                        months={2} // 2달
                        direction='horizontal'
                        rangeColors={['#c8c8c8']} // 선택 시, 색깔
                        locale={ko} // 한국어
                    />
                </div>
                
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
        </div>
        )}
      </>
    );
  };

export default Calendar2;
