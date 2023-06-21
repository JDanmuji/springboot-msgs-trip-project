package com.msgs.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.msgs.*"})
<<<<<<< HEAD
@EntityScan("com.msgs.msgs.dto")
=======
@EntityScan("com.msgs.msgs.entity")
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
@EnableJpaRepositories("com.msgs.*.dao")
public class MsgsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsgsApplication.class, args);
	}

}
