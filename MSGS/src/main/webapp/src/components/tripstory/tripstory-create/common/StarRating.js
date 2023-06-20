import React, { useEffect, useState } from 'react';

import styled from "@emotion/styled";
import { FaStar } from 'react-icons/fa';
// import styles from './StarRating.module.css';

// 별점 별모양 클릭해서 매기는 컴포넌트입니다.
// 별 모양 클릭한 만큼 점수가 숫자로 보여지게 하는 함수입니다. 



const StarRating = () => {

  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {

    let clickStates = [...clicked];

    for (let i = 0; i < 5; i++) {
        clickStates[i] = i <= index ? true : false;
    }
    
    setClicked(clickStates);
  };

//   useEffect(() => {
//     sendReview();
//   }, [clicked]); //컨디마 컨디업

//   const sendReview = () => {
//     let score = clicked.filter(Boolean).length;
//     // fetch('http://52.78.63.175:8000/movie', {
//     //   method: 'POST',
//     //   Headers: {
//     //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
//     //   },
//     //   body: JSON.stringify({
//     //     movie_id:1
//     //     star: score,
//     //   }),
//     // });
//   };


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