package com.msgs.msgs.dto;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StoryBlockDTO {
    private int order;
    private int placeOrder;
    private String title;
    private String type;
    private String location;
    private Double mapx;
    private Double mapy;
    private String contentid;

    private int rating;
    private String comment;
    private String imgOriginName;
    private String imgPath;
    private List<Object> reviewImg;

}

