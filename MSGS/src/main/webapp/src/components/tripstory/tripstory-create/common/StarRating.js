import React, { useEffect, useState } from 'react';

import styled from "@emotion/styled";
import { FaStar } from 'react-icons/fa';
// import styles from './StarRating.module.css';

// 별점 별모양 클릭해서 매기는 컴포넌트입니다.
// 별 모양 클릭한 만큼 점수가 숫자로 보여지게 하는 함수입니다. 



const StarRating = ({rating, setRating}) => {

  const ratingState = (rating) => {

    
    let clickStates = [false, false, false, false, false];

    for (let i = 0; i < rating; i++) {
      clickStates[i] = i <= rating ? true : false;
    }

  };


  const initRating = rating > 0 ? ratingState(rating) : [false, false, false, false, false];



  
  const [clicked, setClicked] = useState(initRating);

  const handleStarClick = (index) => {

    let clickStates = [...clicked];
    let starCount = 0;

    for (let i = 0; i < 5; i++) {
        clickStates[i] = (i <= index) ? true : false;
    }
    
    setClicked(clickStates);
    setRating(index);
  };


  return (
    <Wrap>
      <Stars>
        {clicked.map((items, index) => {
          return (
            <FaStar
              key={index}
              size="50"
              onClick={() => handleStarClick(index)}
              className={clicked[index] && 'yellowStar'}
            />
          );
        })}
      </Stars>
    </Wrap>
  );
}



export default StarRating;



const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const RatingText = styled.div`
  color: #787878;
  font-size: 12px;
  font-weight: 400;
`;

const Stars = styled.div`
  display: flex;
  
  width : 15rem;
  gap: 0.2rem;
  

  & svg {
    color: rgb(88, 87, 87);
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;