import React, { useState } from 'react';
import Calendar from './Calendar';
import { useLocation } from 'react-router-dom'
import styles from './TripSchedule2.module.css';

const TripSchedule2 = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true); // 모달 열림 상태

  const handleCloseClick = () => {
    setIsOpen(false); // 모달 닫기
    onClose(); // onClose 함수 호출
  };

  return (
    <>
      {isOpen && ( // isOpen이 true일 때만 모달 표시
        <div className={`${styles.tripScheduleAddModal} ${styles.small}`}>
          <div className={styles.content}>
            <div className={styles.tripScheduleAddModalClose} onClick={handleCloseClick}>
              ✖️
              {/* <img
                src="../../../public/images/icon_close.png"
                alt="icon_close" />
              */}
            </div>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>여행일정 등록</h1>
              <h2 className={styles.subtitle}>일정에 따른 일기예보, 여행정보를 알려드립니다.</h2>
            </div>
            <Calendar />
            <br /><br />
          </div>
        </div>
      )}
    </>
  );
};

export default TripSchedule2;
