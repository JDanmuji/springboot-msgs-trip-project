import React from "react";

const StarShow = (props) => {
    // 별점 '출력'용 컴포넌트
    // props에 rating(숫자)과 height(문자열)을 담아 보내면 아이콘 출력

    // 예시
    // <StarShow rating={3} height={"1.6rem"} />

    const rating = props.rating;

    const ratingStyle = {
        display: "flex",
        alignItems: "center",
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
            {Array.from({ length: rating }).map((_, index) => (
                <img
                    key={index}
                    src={`${process.env.PUBLIC_URL}/images/common/icon_star.png`}
                    style={filledStyle}
                />
            ))}

            {/* 빈 별 */}
            {Array.from({ length: 5 - rating }).map((_, index) => (
                <img
                    key={index}
                    src={`${process.env.PUBLIC_URL}/images/common/icon_star.png`}
                    style={emptyStyle}
                />
            ))}
        </div>
    );
};

export default StarShow;
