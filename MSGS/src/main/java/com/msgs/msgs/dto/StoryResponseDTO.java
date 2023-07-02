package com.msgs.msgs.dto;

import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StoryResponseDTO {
    private Map<String, Object> storyData; //cityName, rating, comment, title

    private List<String> dateList;
    private Map<Integer, List<StoryBlockDTO>> storyList;
    private Map<Integer, String> dailyComment;
}
