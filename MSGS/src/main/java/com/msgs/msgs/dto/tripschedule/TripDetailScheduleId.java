package com.msgs.msgs.dto.tripschedule;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Getter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class TripDetailScheduleId implements Serializable {

    private String id;
    private int tripDailySchedule;

}
