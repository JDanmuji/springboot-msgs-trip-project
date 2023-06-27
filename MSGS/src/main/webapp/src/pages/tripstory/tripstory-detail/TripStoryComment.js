import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./TripStoryComment.module.css";
import TripStoryCommentItem from "./TripStoryCommentItem";

const TripStoryComment = () => {
    // userId 가져오기
    const userId = "user01";

    // 파라미터에서 storyId 가져옴
    const { storyId } = useParams();

    // DB 데이터 담을 state
    const [data, setData] = useState([]);

    // 새로 작성하는 댓글 담을 state
    const [newContent, setNewContent] = useState("");
    const commentChangeHandler = (value) => {
        value.length < 301 && setNewContent(value);
    };

    // back-end에서 댓글 목록 호출
    const getData = async () => {
        try {
            const response = await axios.post(
                "/tripstory/detail/getStoryComment",
                { storyId }
            );
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("Error occurred:", error);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    const storyCommentInsert = async () => {
        try {
            if (newContent) {
                await axios.post("/tripstory/detail/storyCommentInsert", {
                    userId,
                    storyId,
                    content: newContent,
                });
                // 댓글 목록 다시 로드
                getData();
            }
        } catch (error) {
            console.log("Error occurred:", error);
        }
    };

    return (
        <div className={styles["comment-wrap"]}>
            <h2 className={styles["h2-title"]}>
                댓글 <span>{data.length}</span>
            </h2>

            <div className={styles["new-comment-wrap"]}>
                <img className={styles["comment-img"]} />
                <textarea
                    className={styles["new-comment-textarea"]}
                    placeholder="댓글을 작성해주세요. (최대 300자)"
                    value={newContent}
                    onChange={(e) => commentChangeHandler(e.target.value)}
                ></textarea>
                <button onClick={storyCommentInsert}>댓글 등록</button>
            </div>

            {data.length === 0 ? (
                // 댓글 없을 경우
                <p className={styles["no-comment"]}>
                    아직 댓글이 없어요. 가장 먼저 댓글을 작성해보세요!
                </p>
            ) : (
                // 댓글 있을 경우
                <div className={styles["comment-list"]}>
                    {data.map((item, index) => (
                        <TripStoryCommentItem item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TripStoryComment;
