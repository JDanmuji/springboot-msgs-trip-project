import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./TripStoryDetail.module.css";
import Loading from "../../../components/common/Loading";
import TripStoryDay from "./TripStoryDay";
import TripStoryComment from "./TripStoryComment";

const TripStoryDetail = () => {
    // 유저 아이디 가져오기
    const [userId, setUserId] = useState("m000001");

    // 파라미터에서 storyId, scheduleId 가져오기
    const { storyId, scheduleId } = useParams();

    // DB 데이터 담을 state
    const [data, setData] = useState(null);

    // 로그인된 아이디의 좋아요 여부 & 누적 좋아요 수
    const [isLiked, setIsLiked] = useState(false);
    const [likeCnt, setLikeCnt] = useState(0);

    // 현재 출력되는 day
    const [day, setDay] = useState(0);

    // back-end에서 데이터 호출
    useEffect(() => {
        const getData = async () => {
            try {
                // 이야기 상세 데이터 가져오기
                const detailResponse = await axios.post(
                    "/tripstory/detail/getStoryDetail",
                    { storyId }
                );
                setData(detailResponse.data);

                // 좋아요 데이터 가져오기
                const likeResponse = await axios.post(
                    "/tripstory/detail/getStoryLike",
                    { storyId, userId }
                );
                setIsLiked(likeResponse.data.isLiked);
                setLikeCnt(likeResponse.data.likeCnt);
            } catch (error) {
                console.log("Error occurred:", error);
            }
        };
        getData();
    }, []);

    // 좋아요 아이콘 클릭 시 호출
    const likeClickHandler = () => {
        // 좋아요 수 변경
        setLikeCnt((prevLikeCnt) =>
            !isLiked ? prevLikeCnt + 1 : prevLikeCnt - 1
        );
        // 아이콘 색 변경
        setIsLiked((prevIsLiked) => !prevIsLiked);

        // DB 데이터 업데이트
        const likeUpdate = async () => {
            try {
                await axios.post("/tripstory/detail/storyLikeUpdate", {
                    storyId,
                    userId,
                });
            } catch (error) {
                console.log("Error occurred:", error);
            }
        };
        likeUpdate();
    };

    // 이미지 엑박 처리
    const [imageError, setImageError] = useState(false);
    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <>
            {!data ? (
                <Loading />
            ) : (
                <div className={styles["width-wrapper"]}>
                    {!imageError && ( // 이미지 엑박일 경우 띄우지 않음
                        <div className={styles["thumbnail-img-wrap"]}>
                            <img
                                className={styles["thumbnail-img"]}
                                src={data.firstimage}
                                alt={data.title}
                                onError={handleImageError}
                            />
                        </div>
                    )}

                    <div className={styles["story-title-wrap"]}>
                        <h1 className={styles["story-title"]}>{data.title}</h1>
                        <span className={styles["story-comment"]}>
                            {data.comment}
                        </span>

                        {/* 이야기 좋아요 버튼 */}
                        <div
                            className={styles["thumbsup-icon-wrap"]}
                            onClick={likeClickHandler}
                        >
                            <img
                                className={`${styles["thumbsup-icon"]} ${
                                    isLiked && styles["thumbsup-icon-filled"]
                                }`}
                                src={`${process.env.PUBLIC_URL}/images/free-icon-like-126473.png`}
                            />
                            <span
                                className={`${styles["thumbsup-cnt"]} ${
                                    isLiked && styles["thumbsup-cnt-filled"]
                                }`}
                            >
                                {likeCnt}
                            </span>
                        </div>
                    </div>

                    {/* day 선택 버튼 */}
                    <div className={styles["day-btn-wrap"]}>
                        {data.date_list.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles["day-btn"]} ${
                                    day === index && styles["day-btn-filled"]
                                }`}
                                onClick={() => setDay(index)}
                            >
                                Day {index + 1}
                            </button>
                        ))}
                    </div>

                    {/* 선택한 day별 데이터 적용됨 */}
                    <TripStoryDay dayData={data.tripDetailList[day]} />

                    {/* 댓글창 */}
                    <TripStoryComment />
                </div>
            )}
        </>
    );
};

export default TripStoryDetail;
