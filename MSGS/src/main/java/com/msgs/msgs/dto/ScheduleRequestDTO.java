package com.msgs.msgs.dto;

import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleRequestDTO {
    private List<String> dateList;
    private Map<Integer, List<PlanBlockDTO>> planList;
    private String cityName;

    //updateSchedule()에서 필요
    private String scheduleId;
}
