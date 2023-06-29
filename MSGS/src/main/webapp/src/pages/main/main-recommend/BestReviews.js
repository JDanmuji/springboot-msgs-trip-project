import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./MainRecommend.module.css";
import BestReviewItem from "./BestReviewItem";

const BestReviews = () => {
      // DB 데이터 담을 state
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.post("/tripstory/getStoryList");
      const data = {};

      // 데이터 형태 재구성
      response.data.forEach((item) => {
        const tripId = item.tripId;

        if (!data[tripId]) {
          data[tripId] = {
            tripId: tripId,
            scheduleId: item.scheduleId,
            title: item.title,
            comment: item.comment,
            userId: item.userId,
            userName: item.userName,
            userImgPath: item.userImgPath,
            storyImgs: [],
          };
        }

        if (item.storyImg && item.storyImg.length > 0) {
          data[tripId].storyImgs.push(item.storyImg);
        }
    });
    
    setData(Object.values(data));
    // console.log("=====getStoryList=====", Object.values(data));
    // console.log("======data======", data['001'].tripId) // tripId 출력 방법
    } catch (error) {
      console.log(error);
    }
  };

  // getStoryList 실행
  useEffect(() => {
    getData();
  }, []);
  
  // 임시 데이터
    const bestReviewData = [
        {
            memberId: "member1",
            memberName: "미라",
            theme: "즐거운 강릉 여행",
            date: "2박 3일",
            preview: "강릉 순두부 젤라또 노맛",
        },
        {
            memberId: "member2",
            memberName: "승문",
            theme: "행복한 부산 여행",
            date: "2박 3일",
            preview: "부산 비빔당면 노맛",
        },
        {
            memberId: "member3",
            memberName: "지혜",
            theme: "신나는 대전 여행",
            date: "1박 2일",
            preview: "성심당 명란바게트 맛있다",
        },
        {
            memberId: "member4",
            memberName: "은영",
            theme: "먹방 서울 여행",
            date: "3박 4일",
            preview: "빵집 성지순회 #레지고",
        },
    ];

    return (
        <section className={styles["section-best-reviews"]}>
            <h3>마실가실 인기 여행 이야기</h3>

            <div className={styles["best-review-items"]}>
                {data.map((reviewData) => (
                    <BestReviewItem
                        key={reviewData.tripId}
                        reviewData={reviewData}
                    />
                ))}
            </div>
        </section>
    );
};

export default BestReviews;
