package com.msgs.tripplace.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.msgs.msgs.entity.placereview.PlaceReview;

public interface TripPlaceDAO extends JpaRepository<PlaceReview, String> {

}

