import React from 'react';
import styles from "./StoryPostingModal.module.css";
import VerticalLine from './VerticalLine';

//tripstory 글작성 모달창 컴포넌트입니다.
const StoryPostingModal = ({onClose}) => {
    return (
        <>
            <div className={styles["bg"]}></div>   
            <div className={styles["popup"]}>
                <h2>여행 이야기를 공유 하시겠습니까?</h2>
                <hr/>
                <div className={styles["popup-menu"]}>
                    <div onClick={ onClose } className={styles["closex"]} >취소</div>
                    <VerticalLine />
                    <div onClick={ onClose } className={styles["final-posting"]} >공유</div>
                </div>
                
            </div>
        </>
    );
};

export default StoryPostingModal;