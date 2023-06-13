import React, { useState } from 'react';
import Modal from './Modal';
import styles from "./Spot.module.css";


//여행 장소의 순서, 장소, 장소에 대한 설명이 들어가 있는 곳의 컴포넌트입니다.
const SpotItem = (props) => {
    const [isOpen, setIsOpen] = useState(false) //초기값 false
    const onOpen = () => {
        setIsOpen(true) 
    }

    //상태변수와 함수는 같이 있어야 한다.
    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <div className={styles["spot-item"]}>
                <div>
                    <p className={styles['count']}>{props.count}</p>
                    <p className={styles['where']}>{props.where}</p>
                    <p className={styles['comment']}>{props.comment}</p>
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
        </div>
    );
};

export default SpotItem;