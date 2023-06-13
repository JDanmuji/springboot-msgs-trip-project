package com.msgs.msgs.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Table
@Data
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
