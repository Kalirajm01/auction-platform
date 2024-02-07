package com.auction.auctionbackend.controller;
import com.auction.auctionbackend.model.User;
import com.auction.auctionbackend.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/registration")
    public User signUp(@RequestBody User user) {
        return authService.signUp(user);
    }
}

