import React, { useState } from 'react';
import UploadStoryBtn from '../../../components/tripstory/tripstory-write/UploadStoryBtn';
import styles from "./DayModal.module.css";

//tripstory 글작성 모달창 컴포넌트입니다.
const DayModal = ({onClose, handleSpotContent }) => {
    const [content, setContent] = useState("");

    const handleTextareaChange = (event) => {
        setContent(event.target.value);
    };

    const handleUploadStory = () => {
        handleSpotContent(content); // SpotItem 컴포넌트로 텍스트, 이미지 파일들 전달
        onClose(); // SpotModal 닫기
    };
    
    
    return (
        <>
            <div className={styles["bg"]}></div>   
            <div className={styles["popup"]}>
                <p onClick={ onClose } className={styles["closex"]} >X</p>
                <h2>DAY 1의 기록 남기기</h2>
                <hr/>
                <textarea className={styles['tripstory-content']} 
                          placeholder='나의 여행 기록을 남겨주세요.'
                          value={content}
                          onChange={handleTextareaChange}
                          ></textarea>
                <UploadStoryBtn onClose={ handleUploadStory }  />
            </div>
        </>
    );
};

export default DayModal;