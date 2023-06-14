package com.msgs.msgs.dto.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Getter
@NoArgsConstructor
@Table(name="user_like")
public class UserLike {

    @Id
    @Column(name = "like_id")
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns(value = {
            @JoinColumn(name="user_id", nullable = false),
            @JoinColumn(name="user_email", nullable = false),
            @JoinColumn(name="user_phone", nullable = false)},
            foreignKey = @ForeignKey(value = ConstraintMode.NO_CONSTRAINT))
    private UserDTO userLike;


    @Column(name = "trip_region_id")
    private String tripRegionId;

    @Column(name = "like_date")
    private Date date;

}
