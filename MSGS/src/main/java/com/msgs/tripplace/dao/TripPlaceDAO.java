package com.msgs.tripplace.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.msgs.msgs.dto.TripPlaceReviewDTO;
import com.msgs.msgs.entity.placereview.PlaceReview;

public interface TripPlaceDAO extends JpaRepository<PlaceReview, String> {

	@Query("SELECT new com.msgs.msgs.dto.TripPlaceReviewDTO(pr) " +
	        "FROM PlaceReview pr " +
//	        "JOIN pr.userEntity u " +
	        "WHERE pr.contentId = :contentId " +
	        "ORDER BY pr.regDate")
	List<TripPlaceReviewDTO> findAllWithImgOrderDate(@Param("contentId") String contentId);


}

