package com.msgs.msgs.entity.user;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="user_image", indexes = @Index(name = "user_image_index" , columnList = "seq"))
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserImg {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment 설정(id 값이 null일 경우 자동 생성)
    private int seq;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id", nullable = false)
    private UserEntity userImg;

    @Column(name = "img_origin_name")
    private String imgOriginName;

    @Column(name = "img_path")
    private String imgPath;

    @Column(name = "reg_date")
    private LocalDate regDate;
    @Column(name = "mod_date")
    private LocalDate modDate;

}
