package com.msgs.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"user.*" ,"main.*"})
@EntityScan("user.bean")
@EnableJpaRepositories("user.dao")
public class MsgsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsgsApplication.class, args);
	}

}
