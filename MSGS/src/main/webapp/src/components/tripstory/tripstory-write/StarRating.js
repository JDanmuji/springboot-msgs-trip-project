import React from 'react';
import styles from './StarRating.module.css';

// 별점 별모양 클릭해서 매기는 컴포넌트입니다.
// 별 모양 클릭한 만큼 점수가 숫자로 보여지게 하는 함수입니다. 
const StarRating = ({rating, handleRatingChange}) => {
    const handleInputChange = (event) => {
        handleRatingChange(event);
        document.getElementById('total-score').textContent = event.target.value;
      };

    return (
        <>
            <p>Total score for this trip: <span id="total-score">0</span></p> {/* 별점 점수 */}
            <div className={`${styles["star-rating"]} space-x-4 mx-auto`}>
                        <input type="radio" id="5-stars" name="rating" value="5" checked={rating === 5} onChange={handleInputChange}/>
                        <label htmlFor="5-stars" className="star pr-4">★</label>
                        <input type="radio" id="4-stars" name="rating" value="4" checked={rating === 4} onChange={handleInputChange}/>
                        <label htmlFor="4-stars" className="star">★</label>
                        <input type="radio" id="3-stars" name="rating" value="3" checked={rating === 3} onChange={handleInputChange}/>
                        <label htmlFor="3-stars" className="star">★</label>
                        <input type="radio" id="2-stars" name="rating" value="2" checked={rating === 2} onChange={handleInputChange}/>
                        <label htmlFor="2-stars" className="star">★</label>
                        <input type="radio" id="1-star" name="rating" value="1" checked={rating === 1} onChange={handleInputChange} />
                        <label htmlFor="1-star" className="star">★</label>
            </div>
        </>
    );
};

export default StarRating;