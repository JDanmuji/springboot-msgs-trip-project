import React, { useState } from 'react';
import Day1Btn from '../../../components/tripstory/tripstory-write/Day1Btn';
import StarRating from '../../../components/tripstory/tripstory-write/StarRating';
import UploadPhoto from '../../../components/tripstory/tripstory-write/UploadPhoto';
import DateSummary from './DateSummary';
import SpotItem from './SpotItem';
import styles from './WriteForm.module.css';


//tripstory 글작성 페이지의 주요 기능들이 있는 컴포넌트입니다.

const WriteForm = () => {
    const items = [
        {   id: 1, count: "1️⃣", where: "강릉역", comment: "관광명소 강릉" },
        {
            id: 2,
            count: "2️⃣",
            where: "새별 오름",
            comment: "오름이 좋아",
        },
    ];

    const [rating, setRating] = useState(0);

    const handleRatingChange = (event) => {
        setRating(Number(event.target.value));
    };

    return (
        <div className={styles["write-form-area"]}>
            <input type="text" className={styles["tripstory-title"]} placeholder="여행 이야기 제목(필수)" />
            <div className={styles["trip-score-ment"]}>이번 여행 이야기의 총 평점을 입력해주세요.
                <StarRating rating={rating} handleRatingChange={handleRatingChange} /> {/* 별점 매기기 컴포넌트 */}
             </div>
            <textarea className={styles['tripstory-content']} placeholder='이번 여행은 어떤 여행이었나요?'></textarea>
            
            <UploadPhoto /> {/* 사진 첨부 버튼 */}

            <hr/>

            <div className={styles['day-btn']}>
                <Day1Btn /> {/* 날짜 선택 버튼 */}
            </div>
            
            
            <DateSummary />

            <section className={styles["section-spot"]}>
            {items.map((spotData) => (
                <SpotItem
                    key={spotData.id}
                    count={spotData.count}
                    where={spotData.where}
                    comment={spotData.comment}
                />
            ))}
        </section>


        </div>
    );
};

export default WriteForm;