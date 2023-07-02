import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./LocReview.module.css";
// 추천순 정렬로 가져오기
// import reviewDataLike from "./ReviewDummyData";
// 최신순 정렬로 가져오기
// import reviewDataDate from "./ReviewDummyData copy";

import ReviewItem from "./ReviewItem";
import ReviewCreateModal from "./ReviewCreateModal";
import Loading from "../../components/common/Loading";

const LocReview = (props) => {
    // 리뷰 로딩중
    const [isLoading, setIsLoading] = useState(false);

    // 리뷰 리스트 담을 state
    const [reviewList, setReviewList] = useState([]);

    // 추천순, 최신순 정렬
    const [isSortedByLike, setIsSortedByLike] = useState(true);
    // const reviewData = isSortedByLike ? reviewDataLike : reviewDataDate;

    const sortClickHandler = (isLikeSort) => {
        isLikeSort ? setIsSortedByLike(true) : setIsSortedByLike(false);
    };

    // 리뷰 좋아요 버튼 클릭 시 이벤트 발생
    const [isLike, setIsLike] = useState(false);
    const likeChangeHandler = () => {
        setIsLike((prevState) => !prevState);
    };

    // 리뷰 작성 모달 오픈 여부
    const [reviewModalShow, setReviewModalShow] = useState(false);

    // back-end에서 DB 데이터 호출
    const getReviewList = async () => {
        try {
            const response = await axios.post("/tripplace/getReviewList", {
                isSortedByLike, // 정렬기준
                contentId: props.contentId, // 장소 id
            });

            // console.log(response.data);
            setReviewList(response.data);
            setReviewCnt(response.data.length);
            setLeftReview(response.data.length - 2);
        } catch (error) {
            console.log("Error occurred:", error);
        }
    };

    useEffect(() => {
        getReviewList();
    }, [isSortedByLike]);

    const newReviewUpdate = () => {
        setIsLoading(true);

        const fetchReviewList = () => {
            getReviewList();
            setIsLoading(false);
        };
        // 새 리뷰 작성 후 재로딩 전 1초 딜레이 줌
        const delay = setTimeout(fetchReviewList, 300);
        return () => clearTimeout(delay);
    };

    // 리뷰 더보기 기능
    const [reviewCnt, setReviewCnt] = useState(0);
    const [leftReview, setLeftReview] = useState(0);

    const moreReviewClickHandler = () => {
        if (leftReview > 0) {
            setLeftReview((prevLeftReview) => prevLeftReview - 2); // 더보기 버튼
        } else {
            setLeftReview(reviewCnt - 2); // 접기 버튼
        }
    };

    return (
        <div id="review" className={styles["review-container"]}>
            <div className={styles["review-container-header"]}>
                <img
                    className={styles["review-write-icon"]}
                    src="https://assets.triple.guide/images/btn-com-write@2x.png"
                    alt="pen icon"
                    onClick={() => setReviewModalShow(true)}
                />
                <span className={styles["review-title"]}>
                    리뷰
                    <span className={styles["review-cnt"]}>{reviewCnt}</span>
                </span>
            </div>
            {reviewCnt === 0 ? (
                <div className={styles["no-review-text"]}>
                    <p>아직 리뷰가 없어요!</p>
                    <p>아이콘을 눌러 가장 먼저 리뷰를 작성해 보세요.</p>
                </div>
            ) : (
                <>
                    <div className={styles["review-filter-wrap"]}>
                        <div className={styles["review-filter-left"]}>
                            <button
                                className={`${styles["review-filter-btn"]} ${
                                    isSortedByLike &&
                                    styles["review-filter-selected"]
                                }`}
                                onClick={() => sortClickHandler(true)}
                            >
                                추천순
                            </button>
                            <button
                                className={`${styles["review-filter-btn"]} ${
                                    isSortedByLike ||
                                    styles["review-filter-selected"]
                                }`}
                                onClick={() => sortClickHandler(false)}
                            >
                                최신순
                            </button>
                        </div>
                    </div>

                    {isLoading ? (
                        <Loading />
                    ) : (
                        <>
                            {/* 리뷰 목록 */}
                            <ul className={styles["review-container-list"]}>
                                {reviewList
                                    .slice(0, reviewCnt - leftReview)
                                    .map((item) => (
                                        <ReviewItem
                                            key={item.reviewId}
                                            item={item}
                                            isLike={isLike}
                                            likeChangeHandler={
                                                likeChangeHandler
                                            }
                                        />
                                    ))}
                            </ul>
                            {reviewCnt > 2 && (
                                <button
                                    type="button"
                                    className={styles["review-more-btn"]}
                                    onClick={moreReviewClickHandler}
                                >
                                    {leftReview > 0 ? (
                                        <span>
                                            {leftReview}개의 리뷰 더보기
                                        </span>
                                    ) : (
                                        <span>리뷰 접기</span>
                                    )}
                                </button>
                            )}
                        </>
                    )}

                    {reviewModalShow && (
                        <ReviewCreateModal
                            data={props.data}
                            userId={props.userId}
                            contentTypeId={props.contentTypeId}
                            contentId={props.contentId}
                            newReviewUpdate={newReviewUpdate}
                            setReviewModalShow={setReviewModalShow}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default LocReview;
