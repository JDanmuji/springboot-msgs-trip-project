import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import styles from "./TripStoryComment.module.css";

import TripStoryCommentItem from "./TripStoryCommentItem";

const TripStoryComment = () => {
    // userId 가져오기 (토큰)
    const userId = "M000005";

    // storyId 가져오기 (파라미터)
    const { storyId } = useParams(); // 나중에 tripstory에서 파람으로 값을 넘겨줘야 함

    // 등록일, 수정일 반환 함수
    // const isToday = () => {
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = String(today.getMonth() + 1).padStart(2, "0");
    //     const day = String(today.getDate()).padStart(2, "0");
    //     return `${year}-${month}-${day}`;
    // };

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
                "/tripstory/detail/getCommentList",
                { storyId }
            );
            setData(response.data);
            console.log("==========getCommentList", response.data);
        } catch (error) {
            console.log("Error occurred:", error);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    // 댓글 등록 클릭 시 insert, 목록 재로딩
    const storyCommentInsert = async () => {
        try {
            // 작성 내용 있을 때만 실행
            if (newContent.trim()) {
                console.log(storyId);

                // 댓글 등록
                const response = await axios.post(
                    "/tripstory/detail/commentInsert",
                    { userId, storyId: parseInt(storyId), content: newContent }
                );

                // 댓글 목록 리로드, 입력창 초기화
                getData();
                setNewContent("");
            } else {
                setNewContent("");
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
                        <TripStoryCommentItem key={item.seq} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TripStoryComment;
