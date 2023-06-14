package com.msgs.msgs.dto.placereview;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "plaace_review")
@Data
public class PlaceReview {
    @Id
    private String id;
}
