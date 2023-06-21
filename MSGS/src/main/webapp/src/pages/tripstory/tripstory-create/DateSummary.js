import React, { useState } from 'react';
import styles from './DateSummary.module.css';
import DayModal from '../../../components/tripstory/tripstory-create/tripstory-create-day/DayModal';
import { Link } from 'react-router-dom';

//tripstory의 day0, 날짜, 글작성 아이콘 나오는 한 줄의 div 컴포넌트입니다.


const DateSummary = (props) => {

    const {tripDayData, dayBtn} = props;

    const [isOpen, setIsOpen] = useState(false) //초기값 false
    const [content, setContent] = useState(tripDayData.content); // 입력된 값 상태로 관리

    const onOpen = (check) => {
        setIsOpen(check) 
    }

    const handleSpotContent = (content) => {
        setContent(content); 
        tripDayData['content'] = content;
    };

    console.log(tripDayData);

    return (
        <>

            <div className={styles['date-summary']}>
                <div className={styles['trip-date']}>
                    <h5>{'DAY' + dayBtn}</h5>
                    <h5>{tripDayData.dayDate}</h5>
                </div>
                <Link to='#' onClick={() => onOpen(true) }>
                    <img
                            className={styles["write-icon"]}
                            src="https://cdn.imweb.me/upload/596c7f74e6a7f.png"
                    />
                </Link>
                {
                        isOpen && <DayModal setIsOpen={ setIsOpen } handleSpotContent={ handleSpotContent } dayBtn={dayBtn} content={content} />
                }
            </div>
            { content && <div className={styles['day-modal-comment']}>{content}</div>}
        </>

        

        
    );
};

export default DateSummary;