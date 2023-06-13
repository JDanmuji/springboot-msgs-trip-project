import React from 'react';
import UploadStoryBtn from '../../../components/tripstory/tripstory-write/UploadStoryBtn';
import styles from "./Modal.module.css";

//tripstory 글작성 모달창 컴포넌트입니다.
const Modal = ({onClose}) => {
    return (
        <>
            <div className={styles["bg"]}></div>   
            <div className={styles["popup"]}>
                <p onClick={ onClose } className={styles["closex"]} >X</p>
                <h2>DAY 1의 기록 남기기</h2>
                <hr/>
                <textarea className={styles['tripstory-content']} placeholder='나의 여행 기록을 남겨주세요.'></textarea>
                <UploadStoryBtn onClose={ onClose } />
            </div>
        </>
    );
};

export default Modal;