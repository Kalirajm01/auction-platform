package com.auction.auctionbackend.repository;
import com.auction.auctionbackend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.Optional;


//public interface UserRepository extends MongoRepository<User, String> {
//    User findByUsername(String username);
//}

public interface UserRepository extends MongoRepository<User, String> {
    @Query("{ 'username' : ?0 }")
    User findByUsername(String username);
}
