package com.auction.auctionbackend.repository;

import com.auction.auctionbackend.model.Auction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface AuctionRepository extends MongoRepository<Auction, String> {
}

