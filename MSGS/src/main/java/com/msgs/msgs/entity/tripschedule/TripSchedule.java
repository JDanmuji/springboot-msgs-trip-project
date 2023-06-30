package com.msgs.msgs.entity.tripschedule;

import com.msgs.msgs.entity.tripstory.TripStory;
import com.msgs.msgs.entity.user.UserEntity;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import lombok.*;


@Entity
@Table(name= "trip_schedule")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TripSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "schedule_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id", nullable = false)
    private UserEntity userEntity;


    @Column(name="city_name", length = 30)
    private String cityName;

    @Column(name="date_list", length = 500)
    private String dateList;

    @Column(name = "reg_date", nullable = false)
    private LocalDateTime regDate;

    @Column(name = "mod_date")
    private LocalDateTime modDate;

    //mapping
    @OneToOne(mappedBy = "tripSchedule", fetch = FetchType.LAZY)
    private TripStory tripStory;

    @OneToMany(mappedBy = "tripSchedule", fetch = FetchType.LAZY)
    private  List<TripDailySchedule> tripDailySchedules = new ArrayList<>();

    @PrePersist
    public void setRegDate() {
        this.regDate = LocalDateTime.now();
    }

}
