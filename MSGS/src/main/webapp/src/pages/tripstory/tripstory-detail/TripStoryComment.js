import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./TripStoryComment.module.css";
import TripStoryCommentItem from "./TripStoryCommentItem";

const TripStoryComment = (props) => {
  // userId 가져오기(토큰)
  const userId = "m000001";

  // 파라미터에서 storyId 가져옴
  // const { storyId, scheduleId } = useParams(); // 나중에 tripstory에서 파람으로 값을 넘겨줘야 함

  // 등록일, 수정일 반환 함수
  const isToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

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
      const response = await axios.post("/tripstory/detail/getCommentList", {
        // userId: userId,
        tripId: props.tripId,
        scheduleId: props.scheduleId,
      });
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
    console.log(isToday());

    const newCommentData = {
      // seq: null, // DB에서 부여 예정
      userId: userId,
      tripId: props.tripId,
      scheduleId: props.scheduleId, // StoryComment Entity에 선언된 TripStory Entity가 TripId, ScheduleId로 복합키 -> param으로 변경 예정
      content: newContent,
      // like_cnt: 0,
      regDate: isToday(),
      modDate: isToday(),

    };

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
                {
                    userId: userId,
                    storyId: storyId,
                }
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
        console.log(isToday());

        const newCommentData = {
            // seq: null, // DB에서 부여 예정
            userId: userId,
            storyId: storyId,
            scheduleId: scheduleId, // StoryComment Entity에 선언된 TripStory Entity가 storyId, ScheduleId로 복합키 -> param으로 변경 예정
            content: newContent,
            // like_cnt: 0,
            regDate: isToday(),
            modDate: isToday(),
        };

        try {
            // 작성 내용 있을 때만 실행
            if (newContent) {
                // 댓글 등록
                await fetch("/tripstory/detail/commentInsert", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newCommentData), // 데이터 back으로 전송 시, 객체 → JSON
                });

                // 댓글 목록 다시 로드
                getData();

                // 댓글 입력창 초기화
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
                        <TripStoryCommentItem item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TripStoryComment;
