package com.msgs.msgs.dto;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import com.msgs.msgs.entity.tripschedule.TripDailySchedule;
import com.msgs.msgs.entity.tripschedule.TripSchedule;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class TripScheduleDTO {

	// TripSchedule Entity
	private Long scheduleId;
	private String cityName;
	private String dateList;
	private LocalDate regDate;
	private Date modDate;

	// TripDailySchedule Entity
	private int dailyId;

	// TripDetailSchedule Entity
	private List<TripDailySchedule> tripDailySchedule;

	// entity 값 DTO 생성자 주입 - TripSchedule
	public TripScheduleDTO(TripSchedule tripSchedule) {
		this.scheduleId = tripSchedule.getId();
		this.cityName = tripSchedule.getCityName();
		this.dateList = tripSchedule.getDateList();
		this.regDate = tripSchedule.getRegDate();
		this.modDate = tripSchedule.getModDate();

	}
}