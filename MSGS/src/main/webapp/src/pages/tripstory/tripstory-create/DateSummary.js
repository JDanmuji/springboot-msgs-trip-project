import React, { useState } from 'react';
import styles from './DateSummary.module.css';
import DayModal from './DayModal';
import { Link } from 'react-router-dom';

//tripstory의 day0, 날짜, 글작성 아이콘 나오는 한 줄의 div 컴포넌트입니다.


const DateSummary = ({dayDate, dayBtn}) => {
    const [isOpen, setIsOpen] = useState(false) //초기값 false
    const [content, setContent] = useState(""); // 입력된 값 상태로 관리

    const onOpen = (check) => {
        setIsOpen(check) 
    }

   
    const handleSpotContent = (content) => {
        setContent(content); // SpotModal로부터 전달받은 텍스트 설정
    };

    return (
        <>

            <div className={styles['date-summary']}>
                <div className={styles['trip-date']}>
                    <h5>{'DAY' + dayBtn}</h5>
                    <h5>{dayDate}</h5>
                </div>
                <Link to='#' onClick={() => onOpen(true) }>
                    <img
                            className={styles["write-icon"]}
                            src="https://cdn.imweb.me/upload/596c7f74e6a7f.png"
                    />
                </Link>
                {
                        isOpen && <DayModal setIsOpen={ setIsOpen } handleSpotContent={ handleSpotContent } dayBtn={dayBtn}/>
                }
            </div>
            { content && <div className={styles['day-modal-comment']}>{content}</div>}
        </>

        

        
    );
};

export default DateSummary;