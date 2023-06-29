package com.msgs.tripstory.dao;

import com.msgs.msgs.entity.tripstory.TripStory;
import com.msgs.msgs.entity.tripstory.TripStoryId;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface TripStoryDAO extends JpaRepository<TripStory, TripStoryId> {

	@Query("SELECT ts, uts, ui, si FROM TripStory ts LEFT JOIN ts.userTripStory uts LEFT JOIN uts.userImg ui LEFT JOIN ts.storyImgs si")
	List<Object[]> findAllWithStoryImgsAndUserAndImg();

}

