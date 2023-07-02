package com.msgs.tripplace.service;

import java.util.List;

import com.msgs.msgs.dto.TripPlaceReviewDTO;

public interface TripPlaceService {

	public void reviewSubmit(TripPlaceReviewDTO tripPlaceReviewDTO);

	public List<TripPlaceReviewDTO> getReviewList(Boolean isSortedByLike, String contentId);
}
