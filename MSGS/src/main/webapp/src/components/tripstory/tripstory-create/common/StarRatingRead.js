import React, { useEffect, useState } from 'react';

import styled from "@emotion/styled";
import { FaStar } from 'react-icons/fa';
// import styles from './StarRating.module.css';

// 별점 별모양 클릭해서 매기는 컴포넌트입니다.
// 별 모양 클릭한 만큼 점수가 숫자로 보여지게 하는 함수입니다. 
const StarRating = ({rating}) => {

  
  const ratingState = (rating) => {
    
    let clickStates = [false, false, false, false, false];

    for (let i = 0; i < rating; i++) {
      clickStates[i] = i <= rating ? true : false;
    }

    return clickStates;
  };

  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    setClicked(ratingState(rating));
}, [rating])



  return (
    <Wrap>
      <Stars>
        {clicked.map((items, index) => {
          return (
            <FaStar
              key={index}
              size="50"
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



const Stars = styled.div`
  display: flex;
  width : 12rem;
  gap: 0.2rem;
  

  & svg {
    color: rgb(88, 87, 87);
    cursor: pointer;
  }

  .yellowStar {
    color: #fcc419;
  }
`

 ;