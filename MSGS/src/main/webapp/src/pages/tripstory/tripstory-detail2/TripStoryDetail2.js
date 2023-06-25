import React, { useState } from "react";

import stylesStoryDetail from "./TripStoryDetail2.module.css";
import TripStoryDetailComment from "./TripStoryDetailComment";

const TripStoryDetail2 = () => {
    const [cmntLength, setCmntLength] = useState(0);

    const getCmntLengthHandler = (cmntLength) => {
        setCmntLength(cmntLength);
    };

    return (
        <div
            className={stylesStoryDetail["tripstory-detail-container-wrapper"]}
        >
            <div>전체 여행</div>
            <div>DAY1 - day만큼 component만들기</div>
            <div>userInfo</div>
            <div>본문-댓글창</div>
            <div className={stylesStoryDetail["icon-sms-div"]}>
                <img
                    className={stylesStoryDetail["icon-sms"]}
                    src={process.env.PUBLIC_URL + "/images/icon_sms.png"}
                    alt="icon_sms"
                />
                {cmntLength}
            </div>
            <TripStoryDetailComment
                getCmntLengthHandler={getCmntLengthHandler}
            />
        </div>
    );
};

export default TripStoryDetail2;
