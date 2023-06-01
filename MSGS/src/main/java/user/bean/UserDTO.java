package user.bean;

import java.sql.Timestamp;
import java.util.Date;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;


@Entity //해당 class는 Entity 이다.
@Table(name="usertable")
@Data
//@DynamicUpdate
public class UserDTO {
	
	@Column(name="name", nullable = false, length = 30)
	private String name;

	@Id 
	@Column(name="id", nullable = false, length = 30)
	private String id;
	
	@Column(name="pwd", nullable = false, length = 50)
	private String pwd;
	
//  변경감지
//	public void changeName(String name){
//		this.name = name;
//	}
//	
//	public void changePwd(String pwd){
//		this.pwd = pwd;
//	}
}
