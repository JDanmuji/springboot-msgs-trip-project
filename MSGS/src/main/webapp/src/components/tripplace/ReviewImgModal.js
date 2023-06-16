import React, { useState } from "react";

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
};

export default ReviewImgModal;
