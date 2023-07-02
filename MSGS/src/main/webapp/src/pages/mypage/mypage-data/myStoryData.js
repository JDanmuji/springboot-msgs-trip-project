import axios from "axios";

export const axiosMyStoryData = async (tokenValue) => {
    try {
      const response = await axios.post("/mypage/storyList", {
        tokenValue: tokenValue,
      });
  
      const data = {};

      // 데이터 형태 재구성
      response.data.forEach((item) => {
        const storyId = item.storyId;

        // data[storyId]가 없을 경우, 새로운 객체 생성
        if (!data[storyId]) {
          data[storyId] = {
            storyId: storyId,
            scheduleId: item.scheduleId,
            cityName: item.cityName,
            title: item.title,
            comment: item.comment,
            dateList: item.dateList,
            regDate: item.regDate,
            modDate: item.modDate,
            userId: item.userId,
            userName: item.userName,
            userImgPath: item.userImgPath,
            storyImgs: [],
          };
        }

        if (item.storyImgPath && item.storyImgPath.length > 0) {
          data[storyId].storyImgs.push(item.storyImgPath);
        }
      });
  
      console.log("=================Object.values(data)============", Object.values(data));
      return Object.values(data);
    } catch (err) {
      console.log(err);
    }
  };
  