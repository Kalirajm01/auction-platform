package com.auction.auctionbackend.controller;
import com.auction.auctionbackend.model.User;
import com.auction.auctionbackend.repository.UserRepository;
import com.auction.auctionbackend.security.JwtTokenProvider;
import com.auction.auctionbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public UserController(
            AuthenticationManager authenticationManager,
            JwtTokenProvider jwtTokenProvider,
            UserService userService
    ) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
    }

//    @PostMapping("/login")
//    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
//        try {
//            Authentication authentication = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(
//                            loginRequest.getUsername(),
//                            loginRequest.getPassword()
//                    )
//            );
//
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//            String jwt = jwtTokenProvider.generateToken(authentication);
//            return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
//        }
//    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername());
        System.out.println(user);

        if (user == null || !passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }

        // Perform additional login logic if needed

        return ResponseEntity.ok(user.getRole());
    }

    @PostMapping("/registration")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            // Perform any additional validation if needed
            // Hash the password before saving to the database
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            //System.out.println(user.getPassword());
            userRepository.save(user);

            return ResponseEntity.ok("Registration successful");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
//    @PostMapping("/registration")
//    public ResponseEntity<?> registerUser(@RequestBody SignUpRequest signUpRequest) {
//        try {
//            // Your registration logic...
//            if (userService.findByUsername(signUpRequest.getUsername()) != null) {
//                return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
//            }
//
//            // Create user
//
//            User user = new User();
//            user.setUsername(signUpRequest.getUsername());
//            user.setPassword(signUpRequest.getPassword());
//            user.setEmail(signUpRequest.getEmail());
//            user.setRole(signUpRequest.getRole());
//
//            userService.save(user);
//
//            return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
//        } catch (Exception e) {
//            e.printStackTrace(); // Log the exception
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error during signup. Please try again.");
//        }
//    }

}
