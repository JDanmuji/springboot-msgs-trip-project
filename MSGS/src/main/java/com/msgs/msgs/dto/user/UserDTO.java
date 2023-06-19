package com.msgs.msgs.dto.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.msgs.msgs.dto.placereview.PlaceReview;
import com.msgs.msgs.dto.tripschedule.TripSchedule;
import com.msgs.msgs.dto.tripstory.StoryComment;
import com.msgs.msgs.dto.tripstory.StoryLikeCount;
import com.msgs.msgs.dto.tripstory.TripStory;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Entity
@IdClass(UserId.class)
@Table(name="user")
@Data
public class UserDTO {

	@Id
	@Column(name = "user_email", length = 50)
	private String email;

	@Id
	@Column(name = "user_id", length = 20)
	private String id;

	@Id
	@Column(name = "user_phone", columnDefinition="char(11)")
	private String phone;

	@Column(length = 50)
	private String password;

	@Column(name ="user_name", length = 15)
	private String name;

	@Column(columnDefinition="char(1)")
	private String gender;

	@Column(name = "member_date", length = 50)
	private String memberDate;
	@Column(name = "reg_date", nullable = false)
	private LocalDate regDate;
	@Column(name = "mod_date", nullable = false)
	private LocalDate modDate;

	@Column(name="location_consent", columnDefinition="char(1)")
	private String locationConsent;
	@Column(name="reg_user", columnDefinition="char(1)")
	private String regUser;


	//mapping
	//
	@OneToMany(mappedBy = "userLike")
	private List<UserLike> userLikes = new ArrayList<>();

	@OneToOne(mappedBy = "userImg")
	private UserImg userImg;

	// trip schedule
	@OneToMany(mappedBy = "userTripSchedule")
	private List<TripSchedule> tripSchedule = new ArrayList<>();

	// place review
	@OneToMany(mappedBy = "userPlaceReview")
	private List<PlaceReview> placeReviews = new ArrayList<>();

	// trip story
	@OneToMany(mappedBy = "userTripStory")
	private List<TripStory> tripStories = new ArrayList<>();

	@OneToMany(mappedBy = "userStoryCmnt")
	private List<StoryComment> storyComment = new ArrayList<>();

	@OneToMany(mappedBy = "userStoryLike")
	private List<StoryLikeCount> storyLikeCount = new ArrayList<>();

}
