package com.msgs.msgs.dto.tripschedule;

import com.msgs.msgs.dto.tripstory.TripStory;
import com.msgs.msgs.dto.user.UserDTO;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name= "trip_schedule")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TripSchedule {

    @Id
    @Column(name = "schedule_id", length = 15)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name="user_email", nullable = false),
            @JoinColumn(name="user_id", nullable = false),
            @JoinColumn(name="user_phone", nullable = false)
    })
    private UserDTO userTripSchedule;

    @Column(length = 100)
    private String title;

    @Column(length = 30)
    private String city;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(length = 100)
    private String theme;

    @Column(name = "reg_date", nullable = false)
    private LocalDate regDate;
    @Column(name = "mod_date")
    private LocalDate modDate;

    //
    @OneToOne(mappedBy = "tripSchedule", fetch = FetchType.LAZY)
    private TripStory tripStory;
}
