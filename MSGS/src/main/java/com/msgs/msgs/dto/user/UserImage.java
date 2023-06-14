package com.msgs.msgs.dto.user;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name="user_image", indexes = @Index(name = "user_image_index" , columnList = "seq"))
@Data
public class UserImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment 설정(id 값이 null일 경우 자동 생성)
    private int seq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns(value = {
            @JoinColumn(name="user_id", nullable = false),
            @JoinColumn(name="user_email", nullable = false),
            @JoinColumn(name="user_phone", nullable = false)},
            foreignKey = @ForeignKey(value = ConstraintMode.NO_CONSTRAINT))
    private UserDTO userImage;

    @Column(name = "img_origin_name")
    private String imgOriginName;

    @Column(name = "img_path")
    private String imgPath;

    @Column(name = "reg_date")
    private LocalDate regDate;
    @Column(name = "mod_date")
    private LocalDate modDate;

}
