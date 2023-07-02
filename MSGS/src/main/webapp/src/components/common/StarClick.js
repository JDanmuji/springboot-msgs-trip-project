import React from "react";
import { useState } from "react";

const StarClick = (props) => {
    // 별점 '입력'용 컴포넌트
    // state set함수와 height(별 크기)를 props로 받음
    // set함수에 선택된 별 개수를 반환

    // 사용 예시
    // 상위 컴포넌트에서 별 개수 state 관리
    // const [starCnt, setStarCnt] = useState(5);
    // 아래와 같이 컴포넌트 사용
    // <StarClick starCnt={starCnt} setStarCnt={setStarCnt} height={"2rem"} />

    const [starColor, setStarColor] = useState(props.starCnt);

    const starClickHandler = (starIndex) => {
        console.log(starColor);
        console.log(props.starCnt);
        console.log("-------------------");

        setStarColor(starIndex + 1);
        props.setStarCnt(starIndex + 1);
    };

    const ratingStyle = {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
    };
    const filledStyle = {
        height: props.height,
        filter: "invert(62%) sepia(65%) saturate(5531%) hue-rotate(2deg) brightness(103%) contrast(104%)",
    };
    const emptyStyle = {
        height: props.height,
        filter: "invert(88%) sepia(3%) saturate(16%) hue-rotate(8deg) brightness(94%) contrast(90%)",
    };

    return (
        <div style={ratingStyle}>
            {/* 색칠된 별 */}
            {Array.from({ length: starColor }).map((_, index) => (
                <img
                    key={index}
                    src={`${process.env.PUBLIC_URL}/images/common/icon_star.png`}
                    style={filledStyle}
                    onClick={() => starClickHandler(index)}
                    onMouseEnter={() => setStarColor(index + 1)}
                    onMouseLeave={() => setStarColor(props.starCnt)}
                />
            ))}

            {/* 빈 별 */}
            {Array.from({ length: 5 - starColor }).map((_, index) => (
                <img
                    key={index}
                    src={`${process.env.PUBLIC_URL}/images/common/icon_star.png`}
                    style={emptyStyle}
                    onClick={() => starClickHandler(index + starColor)}
                    onMouseEnter={() => setStarColor(index + 1 + starColor)}
                    onMouseLeave={() => setStarColor(props.starCnt)}
                />
            ))}
        </div>
    );
};

export default StarClick;
