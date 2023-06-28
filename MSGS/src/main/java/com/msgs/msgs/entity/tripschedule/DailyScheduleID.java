package com.msgs.msgs.entity.tripschedule;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DailyScheduleID implements Serializable {
    private int dailyId;
    private TripSchedule tripSchedule;

}
