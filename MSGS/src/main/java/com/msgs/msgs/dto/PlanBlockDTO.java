package com.msgs.msgs.dto;

import java.math.BigDecimal;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlanBlockDTO {
    private int order;
    private int placeOrder;
    private String title;
    private String type;
    private String location;
    private Double mapx;
    private Double mapy;
    private String contentid;
    private String firstimage2;
}
