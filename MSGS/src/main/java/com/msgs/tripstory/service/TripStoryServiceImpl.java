package com.msgs.tripstory.service;


import com.msgs.msgs.dto.PlanBlockDTO;
import com.msgs.msgs.dto.StoryBlockDTO;
import com.msgs.msgs.entity.tripschedule.TripSchedule;
import com.msgs.msgs.entity.tripstory.TripStory;
import com.msgs.msgs.entity.tripstory.schedule.StoryDailySchedule;
import com.msgs.msgs.entity.tripstory.schedule.StoryDetailImg;
import com.msgs.msgs.entity.tripstory.schedule.StoryPlace;
import com.msgs.msgs.entity.tripstory.schedule.StoryPlaceID;
import com.msgs.tripschedule.dao.TripScheduleDAO;
import com.msgs.tripstory.dao.StoryDailyDAO;
import com.msgs.tripstory.dao.StoryDetailImgDAO;
import com.msgs.tripstory.dao.StoryPlaceDAO;
import java.util.Map;


import jdk.swing.interop.SwingInterOpUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.msgs.msgs.dto.StoryCommentDTO;
import com.msgs.msgs.dto.TripStoryMainDTO;
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.tripstory.dao.TripStoryDAO;
import com.msgs.tripstory.dto.StoryLikeCountDTO;


import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.entity.user.UserImg;
import com.msgs.tripstory.dao.StoryCommentDAO;
import com.msgs.user.dao.UserDAO;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TripStoryServiceImpl implements TripStoryService {
	
    @Autowired
    private UserDAO userDAO;

	@Autowired
	private TripScheduleDAO scheduleDAO;

    @Autowired
    private TripStoryDAO storyDAO;

	@Autowired
	private StoryDailyDAO storyDailyDAO;

	@Autowired
	private StoryPlaceDAO storyPlaceDAO;

	@Autowired
	private StoryDetailImgDAO storyDetailImgDAO;

    @Autowired
    private StoryCommentDAO storyCommentDAO;

	@Override
	public ResponseEntity<String> getStoryDetail(String storyId) {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	@Transactional
	//storyList(tripStoryCreate 페이지에서 입력한 여행기) 저장
	public Boolean saveStory(
		Map<String, String> storyData,
		List<String> dateList,
		Map<Integer, String> dailyComment,
		Map<Integer, List<StoryBlockDTO>> storyList){

		System.out.println("s11111111111111111111111111111111111111111111111111111111111111111111111");

		/*TRIP_STORY 엔티티에 저장*/
		Optional<UserEntity> userEntity = userDAO.findById("K000001"); // id 이용해서 UserEntity 엔티티 가져오기 */
		UserEntity resultUserEntity = userEntity.get();

		System.out.println("S2222222222222222222222222222222222222222222222222222222222222222");

		Optional<TripSchedule> scheduleEntity = scheduleDAO.findById(
			Integer.parseInt(storyData.get("schedule_id"))
		); // schedule_id 이용해서 SchduleEntity 엔티티 가져오기 */
		TripSchedule resultScheduleEntity = scheduleEntity.get();

		System.out.println("S333333333333333333333333333333333333333333333333333333333333333");

		System.out.println(resultUserEntity.getId());
		System.out.println(resultScheduleEntity.getId());

		TripStory tripStory = new TripStory();
		tripStory.setUserTripStory(resultUserEntity);
		tripStory.setTripSchedule(resultScheduleEntity);
		tripStory.setTitle(storyData.get("title"));
		tripStory.setRating(Integer.parseInt(storyData.get("rating")));
		tripStory.setComment(storyData.get("comment"));
		tripStory.setDateList(String.join(",", dateList));
		tripStory.setCityName(storyData.get("cityName"));


		/*TRIP_STORY 테이블에 레코드 저장*/
		TripStory savedTripStory = null;
		savedTripStory = storyDAO.saveAndFlush(tripStory); //DB에 저장 -> id 얻어오기 위함

		System.out.println("S44444444444444444444444444444444444444444444444444444444444");

		for (Map.Entry<Integer, String> commentEntry : dailyComment.entrySet()) {
			/*STORY_DAILY 엔티티에 저장*/
			StoryDailySchedule storyDaily = new StoryDailySchedule();
			storyDaily.setTripStory(savedTripStory);
			storyDaily.setComment(commentEntry.getValue());

			/*STORY_DAILY 테이블에 레코드 저장*/
			StoryDailySchedule savedStoryDaily = null;
			savedStoryDaily = storyDailyDAO.saveAndFlush(storyDaily);

			System.out.println("S5555555555555555555555555555555555555555555555555555555555");

			for (Map.Entry<Integer, List<StoryBlockDTO>> entry : storyList.entrySet()){

				//STORY_PLACE의 id가 복합키이므로 ID 클래스에 우선 저장
//				StoryPlaceID storyPlaceID = new StoryPlaceID();
//				storyPlaceID.setOrderId(entry.getKey());
//				storyPlaceID.setStoryDailySchedule(savedStoryDaily);

				List<StoryBlockDTO> storyBlocks = entry.getValue() ;

				for(StoryBlockDTO storyblock : storyBlocks){

					/*STORY_PLACE 엔티티에 저장*/
					StoryPlace storyPlace = new StoryPlace();
					storyPlace.setOrderId(storyblock.getOrder());
					storyPlace.setStoryDailySchedule(savedStoryDaily);
					storyPlace.setOrderDay(entry.getKey());
					storyPlace.setPlaceOrder(storyblock.getPlaceOrder());
					storyPlace.setTitle(storyblock.getTitle());
					storyPlace.setType(storyblock.getType());

					storyPlace.setLocation(storyblock.getLocation());
					storyPlace.setMapx(storyblock.getMapx());
					storyPlace.setMapy(storyblock.getMapy());

					storyPlace.setContentid(storyblock.getContentid());
					storyPlace.setRating(storyblock.getRating());
					storyPlace.setComment(storyblock.getComment());


					/*STORY_PLACE 테이블에 레코드 저장*/
					StoryPlace savedStoryPlace = null;
					savedStoryPlace = storyPlaceDAO.saveAndFlush(storyPlace);

					System.out.println("S666666666666666666666666666666666666666666666666666");

					/*STORY_DETAIL_IMG 엔티티에 저장*/
					if(!storyblock.getImgOriginName().isEmpty() && !storyblock.getImgPath().isEmpty()){
						//해당 장소에 대해 유저가 업로드한 이미지가 있는 경우
						StoryDetailImg storyDetailImg = new StoryDetailImg();
						storyDetailImg.setStoryPlace(savedStoryPlace);
						storyDetailImg.setImgPath(storyblock.getImgPath());
						storyDetailImg.setImgOriginName(storyblock.getImgOriginName());

						/*STORY_DETAIL_IMG 테이블에 레코드 저장*/
						storyDetailImgDAO.saveAndFlush(storyDetailImg);
					}else{

						continue;
					}



				}


			}



		}


		return true;
	}



	@Override
	public List<StoryCommentDTO> getCommentList(String storyId) {
        List<Object[]> queryResult = storyCommentDAO.findAllWithUserAndImg();

        List<StoryCommentDTO> resultList = new ArrayList<>(); // 반환받을 DTO
        
        for(Object[] result : queryResult) {
        	StoryComment storyComment = (StoryComment) result[0];
        	UserEntity userEntity = (UserEntity) result[1];
        	UserImg userImg = (UserImg) result[2];
        	System.out.println("=======getCommentList===========" + result);
        	
            StoryCommentDTO storyCommentDTO = new StoryCommentDTO(); // StoryCommentDTO 객체 생성

                        
            storyCommentDTO.setUserId(userEntity.getId());
            storyCommentDTO.setContent(storyComment.getContent());
            storyCommentDTO.setStoryId(storyComment.getTripStoryCmnt().getId() + "");
            storyCommentDTO.setScheduleId(storyComment.getTripStoryCmnt().getTripSchedule().getId()+ "");
            
            if(userImg != null) {
        		storyCommentDTO.setUserImgPath(userImg.getImgPath());
        	}
        	
        	System.out.println("=======userId===========" + storyCommentDTO.getUserId());
        	resultList.add(storyCommentDTO);
        }
		return resultList;
	}

	@Override
	public void storyLike(StoryLikeCountDTO storyLikeCountDTO) {

		storyLikeCountDTO.setStoryId("");

		storyLikeCountDTO.setUserId("msgs01");
//		tripStoryDAO.save(storyLikeCountDTO);
	}


	@Override
	public void commentInsert(StoryCommentDTO storyCommentDTO) {
		StoryComment storyComment = new StoryComment();
		
		// seq값은 자동 생성되므로 set 사용 X
		storyComment.setContent(storyCommentDTO.getContent());
		storyComment.setRegDate(storyCommentDTO.getRegDate());
		storyComment.setModDate(storyCommentDTO.getModDate());
		
		// userId 이용한 UserEntity 엔티티 반환
		Optional<UserEntity> userEntity = userDAO.findById(storyCommentDTO.getUserId());
		if(userEntity.isPresent()) {
			UserEntity resultUserEntity = userEntity.get();
			storyComment.setUserStoryCmnt(resultUserEntity);			
		}		
		

		// 기존
		// TripStory Entity는 복합키이므로 String 2개로 넘어온 데이터 타입을 기본키 클래스(TripStoryId)로 변환

		/*희경이 주석처리함

		TripStoryId tripStoryId = new TripStoryId(storyCommentDTO.getStoryId(), Long.valueOf(storyCommentDTO.getScheduleId()));


		Long scheduleId;
		
		// storyId 이용한 TripStory 엔티티 반환
		Optional<TripStory> tripStory = tripStoryDAO.findById(tripStoryId);
		if(tripStory.isPresent()) {
			TripStory resultTripStory = tripStory.get();
			storyComment.setTripStoryCmnt(resultTripStory);
			
			// scheduleId 값 가져오기
			TripSchedule tripSchedule = resultTripStory.getTripSchedule();
			
		    scheduleId = tripSchedule.getId();
		    System.out.println("search===============" + scheduleId);
		}

		
희경이 주석처리함*/



		System.out.println("TripStoryServiceImpl");

		storyCommentDAO.save(storyComment);
	}


	@Override
	public List<StoryComment> tripScheduleData() {
		// 
		return null;
	}



	@Override
	public List<TripStoryMainDTO> getStoryList() {
//        List<Object[]> queryResult = tripStoryDAO.findAllWithStoryImgsAndUserAndImg(); // 반환받은 Entity
//
//
//        List<TripStoryMainDTO> resultList = new ArrayList<>(); // 반환받을 DTO
//
//        for(Object[] result : queryResult) {
//        	TripStory tripStory = (TripStory) result[0];
//        	UserEntity userEntity = (UserEntity) result[1];
//        	UserImg userImg = (UserImg) result[2];
//        //	StoryImg storyImg = (StoryImg) result[3];
//                                	
//        	TripStoryMainDTO tripStoryMainDTO = new TripStoryMainDTO(); // TripStoryMainDTO 객체 생성
//        	
//        	tripStoryMainDTO.setTripId(tripStory.getId()+"");
//        	tripStoryMainDTO.setScheduleId((long)tripStory.getTripSchedule().getId());
//        	tripStoryMainDTO.setTitle(tripStory.getTitle());
//        	tripStoryMainDTO.setComment(tripStory.getComment());
//        	tripStoryMainDTO.setUserId(userEntity.getId());
//        	tripStoryMainDTO.setUserName(userEntity.getName());
////        	
////            if (userImg != null && storyImg != null) {
////                tripStoryMainDTO.setUserImgPath(userImg.getImgPath());
////                tripStoryMainDTO.setStoryImg(storyImg.getImgPath());
////            } else if (userImg != null) {
////                tripStoryMainDTO.setUserImgPath(userImg.getImgPath());
////            } else if (storyImg != null) {
////                tripStoryMainDTO.setStoryImg(storyImg.getImgPath());
////            } else {
////                System.out.println("하이!");
////            }
////            
//        	System.out.println("=======getStoryImgs===========" + tripStoryMainDTO.getStoryImg());
//        	resultList.add(tripStoryMainDTO);
//        	
//        }
//        
//		return resultList;
		
		return null;
	}
	
	// 삭제 예정
	@Override
	public List<StoryComment> storyCommentsList() {
		return null;
	}

}
