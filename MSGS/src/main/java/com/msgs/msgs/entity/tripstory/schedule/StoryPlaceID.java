package com.msgs.msgs.entity.tripstory.schedule;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StoryPlaceID implements Serializable {
    private int orderId;
    private StoryDailySchedule storyDailySchedule;

}




