package com.msgs.msgs.entity.tripstory;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigInteger;

import com.msgs.msgs.entity.tripschedule.TripSchedule;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TripStoryId implements Serializable {

    private String id;
    private long tripSchedule;
}

