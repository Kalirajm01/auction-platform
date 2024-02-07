package com.auction.auctionbackend.service;
import com.auction.auctionbackend.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User save(User user);
    User findByUsername(String username);
}
