package com.msgs.msgs.entity.tripstory;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Getter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class TripStoryId implements Serializable {

    private String id;
    private String tripSchedule;
}
