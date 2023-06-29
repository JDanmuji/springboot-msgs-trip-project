package com.msgs.msgs.entity.user;

import com.msgs.msgs.entity.placereview.PlaceReview;
import com.msgs.msgs.entity.tripschedule.TripSchedule;
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.msgs.entity.tripstory.StoryLikeCount;
import com.msgs.msgs.entity.tripstory.TripStory;
import com.msgs.user.dao.UserDAO;

import jakarta.persistence.*;
import lombok.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;


@Entity
@Table(name="user")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserEntity implements UserDetails {

	@Id
	@Column(name = "user_id", length = 20)
	private String id;

    @PrePersist
    public void prePersist() {
        String uuid = UUID.randomUUID().toString();
        String userId = uuid.replaceAll("-", "").substring(0, 15);
        this.id = userId;
    }
	
	@Column(name = "user_type", length = 5)
	private String type;

	@Column(name = "user_phone", columnDefinition="char(11)")
	private String phone;

	@Column(name = "user_email", length = 50)
	private String email;

	@Column(length = 50)
	private String password;

	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles = getDefaultRoles();

	private static List<String> getDefaultRoles() {
		List<String> defaultRoles = new ArrayList<>();
		defaultRoles.add("USER");
		defaultRoles.add("ADMIN");
		return defaultRoles;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.roles.stream()
				.map(SimpleGrantedAuthority::new)
				.collect(Collectors.toList());
	}

	@Column(name ="user_name", length = 30)
	private String name;

//	@Column(name = "member_date", length = 50)
//	private String memberDate;
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
	@OneToMany(mappedBy = "userEntity")
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


	//jwt
	@Override
	public String getUsername() {
		return id+","+email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}