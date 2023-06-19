import React, { useState } from "react";

import stylesStoryComment from "./TripStoryDetailComment.module.css";

const TripStoryDetailComment = () => {
  const [countComment, setCountComment] = useState("");

  const countCommentHandler = (event) => {
    setCountComment(event.target.value);
  };

  const lengthComment = countComment.length;

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
        <div className={stylesStoryComment["tripstory-comment-none"]}>
          (댓글이 아무것도 없을 때(props length로 넘겨받기))
          <p>아직 댓글이 없어요.</p>
          <p>가장 먼저 댓글을 작성해보세요!</p>
        </div>
        <div className={stylesStoryComment["tripstory-comment"]}>
          <div
            className={stylesStoryComment["tripstory-comment-left"]}
          >
            <img
              src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/21523219-39bc-46fc-8735-1c70f908281b.jpeg"
              alt="userImg"
            />
          </div>
          <div className={stylesStoryComment["tripstory-comment-right"]}>
            <div className={stylesStoryComment["tripstory-comment-right-top"]}>userName</div>
            <div className={stylesStoryComment["tripstory-comment-right-bottom"]}>안녕하세요</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripStoryDetailComment;
