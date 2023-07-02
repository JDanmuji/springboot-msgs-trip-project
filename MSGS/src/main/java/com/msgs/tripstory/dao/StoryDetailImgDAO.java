package com.msgs.tripstory.dao;

import com.msgs.msgs.entity.tripstory.schedule.StoryDetailImg;
import com.msgs.msgs.entity.tripstory.schedule.StoryDetailImgID;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoryDetailImgDAO extends JpaRepository<StoryDetailImg, StoryDetailImgID> {
//    List<StoryDetailImg> findAllByStoryPlaceOrderIdAndStoryPlaceDailyId(int orderId, int dailyId);
}
