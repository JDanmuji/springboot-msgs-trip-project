import React, { useState } from "react";

import stylesImgModal from "./ReviewImgModal.module.css";

const ReviewImgModal = (props) => {
    const [isImgModalOpen, setIsImgModalOpen] = useState(false);

    const imgModalClickHandler = () => {
        setIsImgModalOpen((prev) => !prev);
        console.log(isImgModalOpen);
    };

    console.log(props.imgSrc)

    return (
        <>
            <img
                className={stylesImgModal["preview-img"]}
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
};

export default ReviewImgModal;
