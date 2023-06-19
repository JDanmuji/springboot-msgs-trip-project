import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import stylesStoryComment from "./TripStoryDetailComment.module.css";

const TripStoryDetailComment = (props) => {
  const [countComment, setCountComment] = useState("");
  const [storyComments, setStoryComments] = useState([]);

  const countCommentHandler = (event) => {
    setCountComment(event.target.value);
  };

  const lengthComment = countComment.length;

  const isFetchedRef = useRef(false); // 중복 호출 방지

  useEffect(() => {
    const fetchData = async () => {
      // fetch 함수: 데이터 호출
      // await를 사용하여 응답 대기 → 응답 데이터를 JSON 형식으로 변환 후에 storyComment 업데이트
      try {
        const response = await fetch("/tripstory/detail");
        const data = await response.json();
        setStoryComments(data);
        props.getCmntLengthHandler(data.length);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (!isFetchedRef.current) {
      fetchData();
      isFetchedRef.current = true;
      // setStoryComment에 따른 중복 호출 방지
    }
  }, []);

  return (
    <>
      {/* 댓글 입력창 */}
      <div
        className={stylesStoryComment["tripstory-comment-container-wrapper"]}
      >
        <div className={stylesStoryComment["tripstory-comment-container-top"]}>
          <div
            className={stylesStoryComment["tripstory-comment-container-left"]}
          >
            <img
              src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/21523219-39bc-46fc-8735-1c70f908281b.jpeg"
              alt="userImg"
            />
          </div>
          <div
            className={stylesStoryComment["tripstory-comment-container-right"]}
            onChange={countCommentHandler}
          >
            <textarea
              title="comment"
              rows={5}
              cols={94}
              placeholder="내용을 입력해주세요 (로그인 여부에 따른 유효성 검사?)"
              maxLength={500}
            />
          </div>
        </div>
        <div
          className={stylesStoryComment["tripstory-comment-container-bottom"]}
        >
          {lengthComment} / 500
        </div>
      </div>

      {/* 댓글 등록 버튼 */}
      <div className={stylesStoryComment["tripstory-comment-submit-btn-div"]}>
        <div className={stylesStoryComment["tripstory-comment-submit-btn"]}>
          댓글 등록
        </div>
      </div>

      {/* 댓글 조회 */}
      <div className={stylesStoryComment["tripstory-comment-area"]}>
        {storyComments.length > 0 ? (
          storyComments.map((comment) => (
            <div
              key={comment.id} // 각 댓글의 고유한 키 값 설정 (예: comment.id)
              className={stylesStoryComment["tripstory-comment"]}
            >
              <div className={stylesStoryComment["tripstory-comment-left"]}>
                <img
                  src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/aa9bb78e-a09d-4ffa-a8e5-21ceeab7b101.jpeg"
                  alt="userImg"
                />
              </div>
              <div className={stylesStoryComment["tripstory-comment-right"]}>
                <div
                  className={stylesStoryComment["tripstory-comment-right-top"]}
                >
                  {comment.userId}
                </div>
                <div
                  className={
                    stylesStoryComment["tripstory-comment-right-bottom"]
                  }
                >
                  {comment.content}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={stylesStoryComment["tripstory-comment-none"]}>
            (댓글이 아무것도 없을 때(props length로 넘겨받기))
            <p>아직 댓글이 없어요.</p>
            <p>가장 먼저 댓글을 작성해보세요!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TripStoryDetailComment;
