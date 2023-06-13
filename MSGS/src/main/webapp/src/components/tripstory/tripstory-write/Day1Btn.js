import React, { useState } from 'react';
import styles from './Day1Btn.module.css';

//day 선택 버튼입니다.

const Day1Btn = () => {
  const days = [
    { title: 'day1' },
    { title: 'day2' },
    { title: 'day3' },
    { title: 'day4' },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const day1ButtonClick = (index) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <>
    {days.map((days, index)=>(
      <div
      key={index}
      className={`${styles['day1-btn']} ${activeIndex === index ? styles.active : ''}`}
      onClick={()=> day1ButtonClick(index) }
    >
      
        <a href='#'>{ days.title }</a>
    </div>
      ))}

    </>
  );
};

export default Day1Btn;
