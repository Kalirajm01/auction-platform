package com.auction.auctionbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
//@EnableJpaRepositories(basePackages = "com.auction.auctionbackend.repository.jpa")
@ComponentScan(basePackages = "com.auction.auctionbackend")

public class AuctionBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuctionBackendApplication.class, args);
	}

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
}


