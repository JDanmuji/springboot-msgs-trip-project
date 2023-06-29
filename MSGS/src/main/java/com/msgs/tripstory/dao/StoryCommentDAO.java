package com.msgs.tripstory.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.msgs.entity.tripstory.TripStory;

@Repository
public interface StoryCommentDAO extends JpaRepository<StoryComment, Integer> {

//	@Query("SELECT sc, ue, ui FROM StoryComment sc LEFT JOIN sc.userStoryCmnt ue LEFT JOIN ue.userImg ui")
//    List<Object[]> findAllWithUserAndImg();
    
    @Query("SELECT sc, ue, ui FROM StoryComment sc LEFT JOIN sc.userStoryCmnt ue LEFT JOIN ue.userImg ui WHERE sc.tripStoryCmnt.id = :storyId")
    List<Object[]> findAllWithUserAndImg(@Param("storyId") int storyId);
}
