import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./TripStoryComment.module.css";

const TripStoryComment = () => {
    // 파라미터에서 storyId 가져옴
    const { storyId } = useParams();

    // DB 데이터 담을 state
    const [data, setData] = useState([]);

    // back-end에서 데이터 호출
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post(
                    "/tripstory/getStoryComment",
                    { storyId }
                );
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Error occurred:", error);
            }
        };
        getData();
    }, []);

    return (
        <div className={styles["comment-wrap"]}>
            <h2>댓글</h2>
            <div className={styles["new-comment-wrap"]}>
                <img />
                <textarea
                    className={styles["new-comment-textarea"]}
                    placeholder="댓글을 작성해주세요."
                ></textarea>
            </div>

            {data.map((item, index) => (
                <div key={item.commentId}>
                    {item.userNick}
                    {item.comment}
                </div>
            ))}
        </div>
    );
};

export default TripStoryComment;
