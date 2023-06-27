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
public class PlaceInfoDTO { //숙박(dorm), 관광지, 음식점 정보 저장 가능.
    private String contentid;
    private String title;
    private int areacode;
    private int sigungucode;
    private String contenttypeid;
    private String firstimage2;
    private Double mapx;
    private Double mapy;
}
