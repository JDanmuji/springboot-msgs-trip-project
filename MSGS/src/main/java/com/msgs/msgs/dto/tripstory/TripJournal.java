package com.msgs.msgs.dto.tripstory;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="trip_journal")
//@IdClass()
@Data
public class TripJournal {

    @Id
    @Column(name = "trip_id", length = 15)
    private String id;

//    여향일정 join
//    @Id
//    @JoinColumn(name = "")

}
