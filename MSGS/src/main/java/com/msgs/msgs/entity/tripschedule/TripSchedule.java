package com.msgs.msgs.entity.tripschedule;

import com.msgs.msgs.entity.tripstory.TripStory;
import com.msgs.msgs.entity.user.UserEntity;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.*;
import java.time.LocalDate;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;


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
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id", nullable = false)
    private UserEntity userTripSchedule;


    @Column(name="city_name", length = 30)
    private String cityName;

    @Column(name="date_list", length = 500)
    private String dateList;

    @Column(name = "reg_date", nullable = false)
    private LocalDateTime regDate;

    @Column(name = "mod_date")
    private LocalDateTime modDate;

    //
    @OneToOne(mappedBy = "tripSchedule", fetch = FetchType.LAZY)
    private TripStory tripStory;

    @PrePersist
    public void setRegDate() {
        this.regDate = LocalDateTime.now();
    }
}
