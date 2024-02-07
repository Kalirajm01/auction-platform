package com.auction.auctionbackend.repository;

import com.auction.auctionbackend.model.Auction;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Auction, String> {
}
