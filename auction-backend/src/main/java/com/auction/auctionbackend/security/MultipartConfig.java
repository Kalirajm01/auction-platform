package com.auction.auctionbackend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

@Configuration
public class MultipartConfig {

    @Bean
    public CommonsMultipartResolver multipartResolver() {
        CommonsMultipartResolver resolver = new CommonsMultipartResolver();
        // Set maximum upload size if needed
        resolver.setMaxUploadSize(5242880); // 5MB
        return resolver;
    }
}
