import React, { useEffect, useState } from 'react';
import styles from './DayBtn.module.css';
import { Link } from 'react-router-dom';

//day 선택 버튼입니다.

const DayBtn = ({tripDetailList, getDaySelect, dayBtn}) => {


  const index_num = (index) => {
      return (index+1);
  };
  
  return (
    <div className={styles['day-btn-list']}>
      
      {
      tripDetailList.map((items, index)=>(
        
        <div key={index_num(index)}
             className={`${styles['day-btn']} ${(dayBtn-1) === index ? styles.active : ''}`}
             onClick={()=> getDaySelect(index_num(index)) }
        >
          <Link to='#'>{ 'DAY' + index_num(index) }</Link>
        </div>
      ))}

    </div>
  );
};

export default DayBtn;
