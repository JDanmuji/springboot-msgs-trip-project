import React, { useState } from 'react';
import UploadStoryBtn from '../tripstory-create-upload/UploadStoryBtn';
import styles from "./DayModal.module.css";
import CompleteBtn from '../common/CompleteBtn';

//tripstory 글작성 모달창 컴포넌트입니다.
const DayModal = (props) => {


    const {setIsOpen, handleSpotContent, day, content } = props;
    const [modalContent, setModalContent] = useState(content); // 입력된 값 상태로 관리

    const handleTextareaChange = (event) => {
        setModalContent(event.target.value);
    };

    const handleCloseXButton = () => {
        setIsOpen(false); // SpotModal 닫기
    };

    const handleCompleteStory = () => {
        handleSpotContent(modalContent); // SpotItem 컴포넌트로 텍스트, 이미지 파일들 전달
        setIsOpen(false); // SpotModal 닫기
    };
    
    
    return (
        <>
            <div className={styles["bg"]}></div>   
                <div className={styles["popup"]}>
                    <p onClick={ handleCloseXButton} className={styles["closex"]} >X</p>
                        <h2>DAY{day} 의 기록 남기기</h2>
                    <hr/>
                <textarea className={styles['tripstory-content']} 
                          placeholder='나의 여행 기록을 남겨주세요.'
                          value={modalContent}
                          onChange={handleTextareaChange}
                          ></textarea>
                <CompleteBtn handleCompleteStory={ handleCompleteStory }  />
            </div>
        </>
    );
};

export default DayModal;