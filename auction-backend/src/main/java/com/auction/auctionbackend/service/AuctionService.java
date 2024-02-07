package com.auction.auctionbackend.service;

import com.auction.auctionbackend.model.Auction;
import com.auction.auctionbackend.repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

public interface AuctionService {
    Auction createAuction(Auction auction);
    Auction findById(String id);
    Auction closeAuction(String id);
    // Add more methods as needed
}

//@Service
//public class AuctionService {
//
//    @Autowired
//    private AuctionRepository auctionRepository;
//
//    public Auction createAuction(Auction auction) {
//        // Implement createAuction method
//        return auctionRepository.save(auction);
//    }
//
//    public Auction getAuctionById(String id) {
//        Optional<Auction> optionalAuction = auctionRepository.findById(id);
//        return optionalAuction.orElse(null);
//    }
//
//    public boolean closeAuction(String id) {
//        Optional<Auction> optionalAuction = auctionRepository.findById(id);
//        if (optionalAuction.isPresent()) {
//            Auction auction = optionalAuction.get();
//            auction.setStatus("Closed");
//            auctionRepository.save(auction);
//            return true;
//        }
//        return false;
//    }
//
//    // Add other service methods for updating, deleting, etc.
//}
