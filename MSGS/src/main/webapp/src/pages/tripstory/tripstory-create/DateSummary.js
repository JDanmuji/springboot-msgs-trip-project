import React, { useState } from 'react';
import styles from './DateSummary.module.css';
import Modal from './Modal';

//tripstory의 day0, 날짜, 글작성 아이콘 나오는 한 줄의 div 컴포넌트입니다.


const DateSummary = () => {
    const [isOpen, setIsOpen] = useState(false) //초기값 false
    const onOpen = () => {
        setIsOpen(true) 
    }

    //상태변수와 함수는 같이 있어야 한다.
    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <div className={styles['date-summary']}>
            <div className={styles['trip-date']}>
                DAY 1 | 2023.06.07
            </div>
            <a href='#' onClick={ onOpen }>
                <img
                        className={styles["write-icon"]}
                        src="https://cdn.imweb.me/upload/596c7f74e6a7f.png"
                />
            </a>
            {
                    isOpen && <Modal onClose={ onClose }/>
            }
        </div>

        

        
    );
};

export default DateSummary;