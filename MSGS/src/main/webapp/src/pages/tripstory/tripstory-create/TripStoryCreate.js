import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./TripStoryCreate.module.css";
import Loading from "../../../components/common/Loading";
import TripStoryCreateDay from "./TripStoryCreateDay";
import GoogleMapPolyline from "../../../components/tripstory/tripstory-details/GoogleMapPolyline";
import StarClick from "../../../components/common/StarClick";
import UploadPhotoList from "../../../components/tripstory/tripstory-create/tripstory-create-upload/UploadPhotoList";
import UploadPhoto from "../../../components/tripstory/tripstory-create/tripstory-create-upload/UploadPhoto";


/*이 페이지 마운트 시 백에서 가져오는 정보 Start*/


const schedule_id = 13
const dateList = [ '2023.6.22', '2023.6.23', '2023.6.24' ]
const cityName = '강릉·속초'

const storyList_sel = {



	/*storyList의 각 Object에 추가할 데이터 (Nullable)*/
	// rating = 4,
	// comment = "아 여기는 뷰가 멋지더라",
	// imgOriginName = "img origin name",
	// imgPath = "img path"
	1: [
		{
			contentid: '697068',
			title: '자연향기펜션',
			areacode: 31,
			sigungucode: 19,
			contenttypeid: '32',
			firstimage2: 'http://tong.visitkorea.or.kr/cms/resource/18/2613518_image2_1.jpg',
			mapx: 127.3819906851,
			mapy: 37.6341175914,
			location: '양평',
			isChecked: false,
			type: '숙박',
			order: 1,
			placeOrder: null,

			rating: 4,
			comment: '아 여기는 뷰가 멋지더라',
			img_origin_name: 'img origin name',
			img_path: 'img path',
            reviewImg : ['http://tong.visitkorea.or.kr/cms/resource/18/2613518_image2_1.jpg']
		},
		{
			contentid: '125538',
			title: '현등사(가평)',
			areacode: 31,
			sigungucode: 1,
			contenttypeid: '12',
			firstimage2: 'http://tong.visitkorea.or.kr/cms/resource/49/2690649_image3_1.jpg',
			mapx: 127.3309245813,
			mapy: 37.8705863732,
			location: '가평',
			isChecked: false,
			type: '관광지',
			placeOrder: 1,
			order: 2,

			rating: 4,
			comment: '아 여기는 뷰가 멋지더라',
			img_origin_name: 'img origin name',
			img_path: 'img path',
            reviewImg : []
		},
	],
	2: [
		{
			contentid: '139868',
			title: '아띠울펜션',
			areacode: 31,
			sigungucode: 19,
			contenttypeid: '32',
			firstimage2: 'http://tong.visitkorea.or.kr/cms/resource/94/1893194_image3_1.jpg',
			mapx: 127.5863817028,
			mapy: 37.5908124797,
			location: '양평',
			isChecked: false,
			type: '숙박',
			order: 1,
			placeOrder: null,

			rating: 4,
			comment: '아 여기는 뷰가 멋지더라',
			img_origin_name: 'img origin name',
			img_path: 'img path',
            reviewImg : ['http://tong.visitkorea.or.kr/cms/resource/18/2613518_image2_1.jpg']
		},
		{
			contentid: '2754411',
			title: '회령손만두국',
			areacode: 31,
			sigungucode: 19,
			contenttypeid: '39',
			firstimage2: 'http://tong.visitkorea.or.kr/cms/resource/25/2754325_image2_1.jpg',
			mapx: 127.6325993445,
			mapy: 37.5085950855,
			location: '양평',
			isChecked: false,
			type: '음식점',
			placeOrder: 1,
			order: 2,

			rating: 4,
			comment: '아 여기는 뷰가 멋지더라',
			img_origin_name: 'img origin name',
			img_path: 'img path',
            reviewImg : ['http://tong.visitkorea.or.kr/cms/resource/18/2613518_image2_1.jpg']
		},
		{
			contentid: '608274',
			title: '두부와보리 (옥천순두부)',
			areacode: 31,
			sigungucode: 19,
			contenttypeid: '39',
			firstimage2: 'http://tong.visitkorea.or.kr/cms/resource/34/612534_image3_1.jpg',
			mapx: 127.4668053672,
			mapy: 37.5321698635,
			location: '양평',
			isChecked: false,
			type: '음식점',
			placeOrder: 2,
			order: 3,

			rating: 4,
			comment: '아 여기는 뷰가 멋지더라',
			img_origin_name: 'img origin name',
			img_path: 'img path',
            reviewImg : ['http://tong.visitkorea.or.kr/cms/resource/18/2613518_image2_1.jpg']
		},
	],
    3 : []
}
/*이 페이지 마운트 시 백에서 가져오는 정보 End*/


const storyData_sel = {
    cityName : '강릉·속초',
    schedule_id: 13,
    title : '재밌었던 강릉 여행~^^',
    rating : 5,
    cityName : '강릉·속초',
    dateList : [ '2023.6.22', '2023.6.23', '2023.6.24' ],
    comment : '갑작스럽게 가게 된 여행이지만 날씨가 좋아 일정 내내 쾌적하게 다녔다~! 오랜만에 동해바다를 보니 가슴이 뻥 뚫리는 기분이었다.',
    img : []
}


/*일자별 데이터 (Ex. Day3에 대한 코멘트)*/
let dailyComment_sel = {
	1: '첫째날은 흐린가 싶더니 점심 지나서는 쾌청한 날씨였다.',
	2: '어제 일찍 자서 컨디션 좋게 하루를 시작했다.',
	3: '여행 마지막날ㅠ 아침으로 먹은 해장국이 존맛이었음',
}

 
const TripStoryCreate = () => {

    const [dailyComment, setDailyComment] = useState({});
    const [storyData, setStoryData] = useState({});
    const [storyList, setStoryList] = useState({});
    const [starCnt, setStarCnt] = useState(5);

    const mapDataList = [];

    // 유저 아이디 가져오기
    const [userId, setUserId] = useState("m000001");

    // 파라미터에서 storyId, scheduleId 가져오기
    const { storyId, scheduleId } = useParams();
    

    // 현재 출력되는 day
    const [day, setDay] = useState(0);
    


    useEffect(() => {
        setDailyComment(dailyComment_sel);
        setStoryData(storyData_sel);
        setStoryList(storyList_sel);
    }, [dailyComment_sel, storyData_sel, storyList_sel]);



    
    
    
        let placeOrder = 1;
            // 지도에 표기할 좌표 데이터 추출
            
            storyList_sel[(day+1)].forEach((item, index) => {
                
                const placeData = {
                    order: index + 1,
                    placeOrder: item.type !== "숙박" ? placeOrder : null,
                    type: item.type,
                    center: { lat: item.mapy, lng: item.mapx },
                };
                mapDataList.push(placeData);
    
                if (item.type === "place") {
                    placeOrder += 1;
                }
            });
    

    //저장 버튼 눌렀을 때 백으로 Story 데이터 보내기.
   const saveTripStory = () => {

    console.log(dateList)
    console.log(storyList)
    console.log(dailyComment)
    console.log(storyData)

    const requestBody = {
       dateList: dateList,
       storyList: storyList,
       dailyComment: dailyComment,
       storyData: storyData
       }

    console.log(requestBody)
   axios
   .post('/tripstory/info', requestBody)
   .then(function (response) {
       console.log('saveTripStory  성공')
   })
   .catch(function (error) {
      console.log('saveTripStory  실패', error)
   })
 };



    // back-end에서 데이터 호출
    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             // 이야기 상세 데이터 가져오기
    //             const detailResponse = await axios.post(
    //                 "/tripstory/detail/getStoryDetail",
    //                 { storyId }
    //             );
    //             setData(detailResponse.data);

    //             // 좋아요 데이터 가져오기
    //             const likeResponse = await axios.post(
    //                 "/tripstory/detail/getStoryLike",
    //                 { storyId, userId }
    //             );
    //             setIsLiked(likeResponse.data.isLiked);
    //             setLikeCnt(likeResponse.data.likeCnt);
    //         } catch (error) {
    //             console.log("Error occurred:", error);
    //         }
    //     };
    //     getData();
    // }, []);


    // 이미지 엑박 처리
    const [imageError, setImageError] = useState(false);
    const handleImageError = () => {
        setImageError(true);
    };



    
    //Write Form Title Change
    const  handleWriteTitle = (e) => {
        setStoryData((storyData) => ({
            ...storyData,
            title: e.target.value
          }));
    }
    

    //Write Form Comment Change
    const  handleWriteComment = (e) => {
        setStoryData((storyData) => ({
            ...storyData,
            comment: e.target.value
          }));
    }
 
       //Write Form Rating Change
    const  handlWriteImg = (imgList) => {
        setStoryData((storyData) => ({
            ...storyData,
            img : imgList
          }));
    }

    

    console.log(storyData)

    console.log(dailyComment)
    return (
        <>
            {
             ( (!dailyComment) &&  (!storyList))   ? (
                 <Loading />
             ) : 
            (
                <div className={styles["width-wrapper"]}>
                     <button className={styles["save-button"]} onClick={saveTripStory}>
                        저장하기
                    </button>
                  
                    {/* 각 day별 경로 표시된 구글맵 */}
                {
          
                
                    <div className={styles["map-wrap"]}>
                                            <GoogleMapPolyline
                                                mapDataList={mapDataList}
                                                width={"90rem"}
                                                height={"30rem"}
                                            />
                                        </div>
                                    
                                }
                    <div  className={styles["tripstory-title"]}>
                        <input className={styles["story-title"]} type="text" value={storyData.title} onChange={handleWriteTitle}/>
                    </div>
                    <div className={styles["star-score-area"]}>
                        <div className={styles["trip-score-ment"]}>이번 여행 이야기의 총 평점을 입력해주세요.</div>
                        <StarClick starCnt={starCnt} setStarCnt={setStarCnt} height={"3rem"} />
                    </div> 
                    <div className={styles['tripstory-content']} >
                            <textarea placeholder='이번 여행은 어떤 여행이었나요?' value={storyData.comment} onChange={handleWriteComment}/>
                    </div>
                    <div className={styles['upload-photo-area']}>
                        <UploadPhoto photos={storyData.img} setPhotos={handlWriteImg}/>
                    </div>



                    {/* day 선택 버튼 */}
                    {dateList && 
                    <div className={styles["day-btn-wrap"]}>
                        {dateList.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles["day-btn"]} ${
                                    day === index & styles["day-btn-filled"]
                                }`}
                                onClick={() => setDay(index)}
                            >
                                Day {index + 1}
                            </button>
                        ))}
                    </div>
                    }


                    {/* 선택한 day별 데이터 적용됨 */}
                    
                    <TripStoryCreateDay day={day} 
                                        date={dateList[day]} 
                                        dailyComment={dailyComment} 
                                        setDailyComment={setDailyComment}
                                        storyList={storyList}
                                        setStoryList={setStoryList}
                                         /> 

                </div>
            )}
        </>
    );
};

export default TripStoryCreate;