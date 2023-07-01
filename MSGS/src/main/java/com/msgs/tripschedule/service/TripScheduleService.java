package com.msgs.tripschedule.service;

import com.msgs.msgs.dto.PlaceInfoDTO;
import com.msgs.msgs.dto.PlanBlockDTO;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.RequestParam;

public interface TripScheduleService {
    List<PlaceInfoDTO> getDormList(int areaCode, List<Integer> sigunguCodeList);
    List<PlaceInfoDTO> getPlaceList(int areaCode, List<Integer> sigunguCodeList);
    Boolean saveSchedule(List<String> dateList, Map<Integer, List<PlanBlockDTO>> planList, String cityName);

    Map<String, Object> getSchedule(int scheduleId);
    Boolean updateSchedule(List<String> dateList, Map<Integer, List<PlanBlockDTO>> planList, String cityName);

}
