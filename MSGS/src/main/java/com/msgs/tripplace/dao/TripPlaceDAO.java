package com.msgs.tripplace.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.msgs.msgs.dto.TripPlaceReviewDTO;
import com.msgs.msgs.entity.placereview.PlaceReview;

public interface TripPlaceDAO extends JpaRepository<PlaceReview, String> {

	@Query("SELECT new com.msgs.msgs.dto.TripPlaceReviewDTO(pr, u, ui) " +
	        "FROM PlaceReview pr " +
	        "JOIN pr.userPlaceReview u " +
	        "LEFT JOIN u.userImg ui " +
	        "WHERE pr.contentId = :contentId " +
	        "ORDER BY pr.regDate DESC")
	List<TripPlaceReviewDTO> findAllWithImgOrderDate(@Param("contentId") String contentId);
	
	@Query("SELECT new com.msgs.msgs.dto.TripPlaceReviewDTO(pr, u, ui) " +
	        "FROM PlaceReview pr " +
	        "JOIN pr.userPlaceReview u " +
	        "LEFT JOIN u.userImg ui " +
	        "LEFT JOIN pr.userLikes l " +
	        "WHERE pr.contentId = :contentId " +
	        "GROUP BY pr, u, ui.imgPath " +
	        "ORDER BY COUNT(l) DESC, pr.regDate DESC")
	List<TripPlaceReviewDTO> findAllWithImgOrderLike(@Param("contentId") String contentId);

	// 유저별 작성 리뷰수 조회
	@Query("SELECT COUNT(pr) FROM PlaceReview pr WHERE pr.userPlaceReview.id = :userId")
    int getUserReviewCount(@Param("userId") String userId);
}

