package com.msgs.msgs.dto.tripschedule;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "trip_schedule_image", indexes = @Index(name = "trip_schedule_image_index", columnList = "seq"))
@Data
public class TripScheduleImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment 설정(id 값이 null일 경우 자동 생성)
    private int seq;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns(value = {
            @JoinColumn(name = "schedule_d_id", nullable = false),
            @JoinColumn(name = "schedule_id", nullable = false)},
            foreignKey = @ForeignKey(value = ConstraintMode.NO_CONSTRAINT))
    private TripDetailSchedule tripScheduleImage;

    @Column(name = "img_origin_name", length = 50)
    private String imgOriginName;

    @Column(name = "img_server_name", length = 50)
    private String imgServerName;

    @Column(name = "img_path", length = 30)
    private String imgPath;

    @Column(name = "reg_date", nullable = false)
    private LocalDate regDate;
    @Column(name = "mod_date")
    private LocalDate modDate;
}
