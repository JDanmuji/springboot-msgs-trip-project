import React, { useState } from "react";
import axios from "axios";

import styles from "./ReviewCreateModal.module.css";

import StarClick from "../../components/common/StarClick";
import UploadPhoto from "../../components/tripstory/tripstory-create/tripstory-create-upload/UploadPhoto";

const ReviewCreateModal = (props) => {
    const [comment, setComment] = useState("");
    const [starCnt, setStarCnt] = useState(5);
    const [modalSelectedPhotos, setModalSelectedPhotos] = useState([]);

    const submitClickHandler = () => {
        reviewSubmit();
        props.setReviewModalShow(false);
        props.newReviewUpdate();
    };

    // back-end에서 API 호출
    const reviewSubmit = async () => {
        try {
            console.log(modalSelectedPhotos);

            const response = await axios.post("/tripplace/reviewSubmit", {
                userId: props.userId,
                contentId: props.contentId,
                title: props.data.title,
                contentTypeId: props.contentTypeId,
                contentTypeName: props.contentTypeId === "12" && "관광명소",
                cityName: props.data.cityname,
                rate: starCnt,
                comment,
                base64List: modalSelectedPhotos,
            });

            console.log("리뷰 작성 완료");
        } catch (error) {
            console.log("Error occurred:", error);
        }
    };

    return (
        <>
            <div className={styles["open-img-modal"]}>
                <section className={styles["open-img-modal-inner"]}>
                    <div className={styles["open-img-modal-inner-main"]}>
                        <img
                            className={styles["icon-close"]}
                            src={
                                process.env.PUBLIC_URL +
                                "/images/icon_close.png"
                            }
                            alt="icon_close"
                            onClick={() => props.setReviewModalShow(false)}
                        />
                        <div className={styles["review-modal-wrapper"]}>
                            <div className={styles["review-modal-top"]}>
                                <h3 className={styles["review-modal-title"]}>
                                    <span>
                                        {props.data.title.lenth > 15
                                            ? props.data.title.slice(0, 15) +
                                              " ..."
                                            : props.data.title}
                                    </span>
                                    리뷰 작성하기
                                </h3>
                                <button
                                    className={styles["review-submit"]}
                                    onClick={submitClickHandler}
                                >
                                    작성 완료
                                </button>
                            </div>

                            <div className={styles["review-star"]}>
                                <StarClick
                                    starCnt={starCnt}
                                    setStarCnt={setStarCnt}
                                    height={"2.4rem"}
                                />
                            </div>
                            <textarea
                                className={styles["review-textarea"]}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            ></textarea>

                            <div className={styles["review-photo"]}>
                                <UploadPhoto
                                    photos={modalSelectedPhotos}
                                    setPhotos={setModalSelectedPhotos}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ReviewCreateModal;
