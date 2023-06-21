import React, { useState } from "react";

<<<<<<< HEAD
import data from "../../pages/tripplace/ReviewDummyData";

import stylesImgModal from "./ReviewImgModal.module.css";

const ReviewImgModal = () => {
  const [isImgModal, setIsImgModal] = useState(false);

  const imgModalChangeHandler = () => {
    setIsImgModal((prev) => !prev);
    console.log(isImgModal);
  };

  return (
    <div>
      <div>
        <button onClick={imgModalChangeHandler}>팝업 버튼</button>
      </div>
      {isImgModal ? (
        <div className={stylesImgModal["open-img-modal"]}>
          <section className={stylesImgModal["open-img-modal-inner"]}>
            <header
              className={stylesImgModal["open-img-modal-inner-header"]}
              onClick={imgModalChangeHandler}
            >
              <img
                className={stylesImgModal["icon-close"]}
                src={process.env.PUBLIC_URL + "/images/icon_close.png"}
                alt="icon_close"
              />
            </header>
            <main className={stylesImgModal["open-img-modal-inner-main"]}>
              <img
                src="https://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
                alt="reviewImg[0]"
              />
            </main>
          </section>
        </div>
      ) : null}
    </div>
  );
=======
import stylesImgModal from "./ReviewImgModal.module.css";

const ReviewImgModal = (props) => {
    const [isImgModalOpen, setIsImgModalOpen] = useState(false);

    const imgModalClickHandler = () => {
        setIsImgModalOpen((prev) => !prev);
        console.log(isImgModalOpen);
    };

    return (
        <>
            <img
                src={props.imgSrc}
                alt="review"
                onClick={imgModalClickHandler}
            />
            {isImgModalOpen ? (
                <div className={stylesImgModal["open-img-modal"]}>
                    <section className={stylesImgModal["open-img-modal-inner"]}>
                        <div
                            className={
                                stylesImgModal["open-img-modal-inner-main"]
                            }
                        >
                            <img
                                className={stylesImgModal["icon-close"]}
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/icon_close.png"
                                }
                                alt="icon_close"
                                onClick={imgModalClickHandler}
                            />
                            <img
                                className={stylesImgModal["opened-img"]}
                                src={props.imgSrc}
                                alt="reviewImg[0]"
                            />
                        </div>
                    </section>
                </div>
            ) : (
                ""
            )}
        </>
    );
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
};

export default ReviewImgModal;
