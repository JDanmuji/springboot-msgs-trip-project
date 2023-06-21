import React, { useState } from 'react';
import styles from './DateSummary.module.css';
<<<<<<< HEAD
import DayModal from './DayModal';
=======
import DayModal from '../../../components/tripstory/tripstory-create/tripstory-create-day/DayModal';
import { Link } from 'react-router-dom';
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b

//tripstory의 day0, 날짜, 글작성 아이콘 나오는 한 줄의 div 컴포넌트입니다.


const DateSummary = (props) => {
<<<<<<< HEAD
    const [isOpen, setIsOpen] = useState(false) //초기값 false
    const [content, setContent] = useState(""); // 입력된 값 상태로 관리

    const onOpen = () => {
        setIsOpen(true) 
    }

    //상태변수와 함수는 같이 있어야 한다.
    const onClose = () => {
        setIsOpen(false)
    }

    const handleSpotContent = (content) => {
        setContent(content); // SpotModal로부터 전달받은 텍스트 설정
    };


    return (
        <>
            <div className={styles['date-summary']}>
                <div className={styles['trip-date']}>
                    DAY 1  2023.06.07
                </div>
                <a href='#' onClick={ onOpen }>
=======

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
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
                    <img
                            className={styles["write-icon"]}
                            src="https://cdn.imweb.me/upload/596c7f74e6a7f.png"
                    />
<<<<<<< HEAD
                </a>
                {
                        isOpen && <DayModal onClose={ onClose } handleSpotContent={handleSpotContent}/>
=======
                </Link>
                {
                        isOpen && <DayModal setIsOpen={ setIsOpen } handleSpotContent={ handleSpotContent } dayBtn={dayBtn} content={content} />
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
                }
            </div>
            { content && <div className={styles['day-modal-comment']}>{content}</div>}
        </>

        

        
    );
};

export default DateSummary;