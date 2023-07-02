package com.msgs.tripplace.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.msgs.msgs.dto.TripPlaceReviewDTO;
import com.msgs.msgs.entity.placereview.PlaceReview;
import com.msgs.msgs.entity.placereview.PlaceReviewImg;

public interface TripPlaceDAO extends JpaRepository<PlaceReview, String> {

	@Query("SELECT new com.msgs.msgs.dto.TripPlaceReviewDTO(pr, u, ui) " +
	        "FROM PlaceReview pr " +
	        "JOIN pr.userPlaceReview u " +
	        "LEFT JOIN u.userImg ui " +
	        "WHERE pr.contentId = :contentId " +
	        "ORDER BY pr.regDate DESC, pr.id DESC")
	List<TripPlaceReviewDTO> findAllWithUserOrderDate(@Param("contentId") String contentId);
	
	@Query("SELECT new com.msgs.msgs.dto.TripPlaceReviewDTO(pr, u, ui) " +
	        "FROM PlaceReview pr " +
	        "JOIN pr.userPlaceReview u " +
	        "LEFT JOIN u.userImg ui " +
	        "LEFT JOIN pr.userLikes l " +
	        "WHERE pr.contentId = :contentId " +
	        "GROUP BY pr, u, ui.imgPath " +
	        "ORDER BY COUNT(l) DESC, pr.regDate DESC, pr.id DESC")
	List<TripPlaceReviewDTO> findAllWithUserOrderLike(@Param("contentId") String contentId);

	// 유저별 작성 리뷰수 조회
	@Query("SELECT COUNT(pr) FROM PlaceReview pr WHERE pr.userPlaceReview.id = :userId")
    int getUserReviewCount(@Param("userId") String userId);

	// 리뷰 이미지 리스트 조회
	@Query("SELECT pri " +
	        "FROM PlaceReview pr " +
	        "JOIN pr.placeReviewImgs pri " +
	        "WHERE pr.id = :reviewId")
	List<PlaceReviewImg> findImgListById(@Param("reviewId") int reviewId);

	// 리뷰 이미지 저장
//  @Transactional
//	@Modifying
	@Query(value = "INSERT INTO place_review_img (review_id, img_path) " +
	               "VALUES (:reviewId, :imgPath)", nativeQuery = true)
//	void imgSave(@Param("reviewId") int reviewId, @Param("imgOriginName") String imgOriginName,
//            @Param("imgServerName") String imgServerName, @Param("imgPath") String imgPath);
	void imgSave(@Param("reviewId") int reviewId, @Param("imgPath") String imgPath);
}

