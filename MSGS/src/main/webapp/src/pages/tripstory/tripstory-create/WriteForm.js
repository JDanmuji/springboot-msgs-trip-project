import React, { useState } from 'react';
import StarRating from '../../../components/tripstory/tripstory-create/common/StarRating';
import UploadPhoto from '../../../components/tripstory/tripstory-create/tripstory-create-upload/UploadPhoto';
import styles from './WriteForm.module.css';


//tripstory 글작성 페이지의 주요 기능들이 있는 컴포넌트입니다.

const WriteForm = () => {
    

    const [rating, setRating] = useState(0);

    const handleRatingChange = (event) => {
        setRating(0);
        setRating(Number(event.target.value));
    };

    return (
        <>
            {/* <UploadBoard /> */}
            <div  className={styles["tripstory-title"]}>
                <input type="text" placeholder="여행 이야기 제목(필수)" />
            </div>
            <div className={styles["star-score-area"]}>
                <div className={styles["trip-score-ment"]}>이번 여행 이야기의 총 평점을 입력해주세요.</div>
                <StarRating rating={rating} handleRatingChange={handleRatingChange} /> {/* 별점 매기기 컴포넌트 */}    
            </div>
            
            <div className={styles['tripstory-content']} >
                <textarea placeholder='이번 여행은 어떤 여행이었나요?' />
            </div>
            <UploadPhoto /> {/* 사진 첨부 버튼 */}

        </>
    );
};

export default WriteForm;