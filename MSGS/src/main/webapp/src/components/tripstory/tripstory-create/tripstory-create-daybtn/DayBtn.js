import React, { useEffect, useState } from 'react';
import styles from './DayBtn.module.css';
import { Link } from 'react-router-dom';

//day 선택 버튼입니다.

const DayBtn = ({startDate, endDate}) => {

  const dayList = [
    'DAY1',
    'DAY2',
    'DAY3',
    'DAY4'
  ]
 
  const [activeIndex, setActiveIndex] = useState(null);

  const dayButtonClick = (index) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <div className={styles['day-btn-list']}>
      
      {
      dayList.map((items, index)=>(
        <div key={index}
             className={`${styles['day-btn']} ${activeIndex === index ? styles.active : ''}`}
             onClick={()=> dayButtonClick(index) }
        >
          <Link to='#'>{ items }</Link>
        </div>
      ))}

    </div>
  );
};

export default DayBtn;
