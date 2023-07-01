//package com.msgs.temp.dao;
//
//import com.msgs.msgs.dto.StoryCommentDTO;
//import com.msgs.msgs.entity.tripschedule.TripSchedule;
//import com.msgs.msgs.entity.tripstory.StoryComment;
//import com.msgs.msgs.entity.tripstory.TripStory;
//
//import com.msgs.msgs.entity.user.UserEntity;
//import com.msgs.msgs.entity.user.UserImg;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//@Repository
//public interface TempUserDAO extends JpaRepository<UserEntity, String> {
//
//    @Query("SELECT ue, ul FROM UserEntity ue LEFT JOIN ue.userLikes ul")
//    // JOIN: 연관된 엔티티가 반드시 데이터를 가져야만 결과로 반환
//    // LEFT JOIN: 왼쪽(기준이 되는) 엔티티를 기준으로 모든 데이터 반환, 연관된 엔티티의 데이터가 없더라도 기준이 되는 엔티티의 데이터는 결과에 포함
//    List<Object[]> findAllWithUserAndLike();
//
//    @Query("SELECT ue, ul, ui FROM UserEntity ue LEFT JOIN ue.userLikes ul LEFT JOIN ue.userImg ui")
//    List<Object[]> findAllWithUserAndLikeAndImg();
//
//
//
//    /*
//    id가 아닌 다른 값으로 param을 받아 조회할 때, 사용
//
//    @Query("SELECT u FROM UserDTO u WHERE u.phone LIKE %:phone%")
//    // @Param: 쿼리 메서드의 매개변수와 쿼리에서 사용하는 매개변수 이름을 연결시켜주는 역할
//    Optional<UserEntity> findByPhone(@Param("phone") String phone);
//     */
//
//}
//
//
///*
// *
//        List<Object[]> queryResult = storyCommentDAO.findAllWithUserAndImg();
//
//        List<StoryCommentDTO> resultList = new ArrayList<>(); // 반환받을 DTO
//
//        for(Object[] result : queryResult) {
//        	StoryComment storyComment = (StoryComment) result[0];
//        	UserEntity userEntity = (UserEntity) result[1];
//        	UserImg userImg = (UserImg) result[2];
//        	System.out.println("=======getCommentList===========" + result);
//
//            StoryCommentDTO storyCommentDTO = new StoryCommentDTO(); // StoryCommentDTO 객체 생성
//
//            if(userImg == null) {
//        		storyCommentDTO.setUserId(userEntity.getId());
//        		storyCommentDTO.setContent(storyComment.getContent());
//        	} else {
//        		storyCommentDTO.setUserId(userEntity.getId());
//        		storyCommentDTO.setContent(storyComment.getContent());
//        		storyCommentDTO.setUserImgPath(userImg.getImgPath());
//        	}
//
//        	System.out.println("=======userId===========" + storyCommentDTO.getUserId());
//        	resultList.add(storyCommentDTO);
//
//        }
//
//		return resultList;
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// * 	@Override
//	public void commentInsert(StoryCommentDTO storyCommentDTO) {
//		StoryComment storyComment = new StoryComment();
//
//		// seq값은 자동 생성되므로 set 사용 X
//		storyComment.setContent(storyCommentDTO.getContent());
//		storyComment.setRegDate(storyCommentDTO.getRegDate());
//		storyComment.setModDate(storyCommentDTO.getModDate());
//
//		// userId 이용한 UserEntity 엔티티 반환
//		Optional<UserEntity> userEntity = userDAO.findById(storyCommentDTO.getUserId());
//		if(userEntity.isPresent()) {
//			UserEntity resultUserEntity = userEntity.get();
//			storyComment.setUserStoryCmnt(resultUserEntity);
//		}
//
//
//
//		// 기존
//		// TripStory Entity는 복합키이므로 String 2개로 넘어온 데이터 타입을 기본키 클래스(TripStoryId)로 변환
//		TripStoryId tripStoryId = new TripStoryId(storyCommentDTO.getTripId(), Long.valueOf(storyCommentDTO.getScheduleId()));
//
//		Long scheduleId;
//
//		// tripId 이용한 TripStory 엔티티 반환
//		Optional<TripStory> tripStory = tripStoryDAO.findById(tripStoryId);
//		if(tripStory.isPresent()) {
//			TripStory resultTripStory = tripStory.get();
//			storyComment.setTripStoryCmnt(resultTripStory);
//
//			// scheduleId 값 가져오기
//			TripSchedule tripSchedule = resultTripStory.getTripSchedule();
//
//		    scheduleId = tripSchedule.getId();
//		    System.out.println("search===============" + scheduleId);
//		}
//
//
//		System.out.println("TripStoryServiceImpl");
//
//		storyCommentDAO.save(storyComment);
//	}
// *
// *
// * */
