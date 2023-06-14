package com.msgs.msgs.dto.tripschedule;

import com.msgs.msgs.dto.user.UserDTO;
import com.msgs.msgs.dto.user.UserLike;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name= "trip_schedule")
@Data
public class TripSchedule {

    @Id
    @Column(name = "schedule_id", length = 15)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns(value = {
            @JoinColumn(name="user_id", nullable = false),
            @JoinColumn(name="user_email", nullable = false),
            @JoinColumn(name="user_phone", nullable = false)},
            foreignKey = @ForeignKey(value = ConstraintMode.NO_CONSTRAINT))
    private UserDTO tripSchedule;

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
    @OneToMany(mappedBy = "tripDetailSchedule")
    private List<TripDetailSchedule> tripDetailSchedules = new ArrayList<>();
}
