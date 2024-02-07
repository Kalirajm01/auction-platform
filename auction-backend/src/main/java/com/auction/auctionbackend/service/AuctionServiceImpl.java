package com.auction.auctionbackend.service;


import com.auction.auctionbackend.model.Auction;
import com.auction.auctionbackend.repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AuctionServiceImpl implements AuctionService {

    @Autowired
    private AuctionRepository auctionRepository;

    @Override
    public Auction createAuction(Auction auction) {
        // Set current timestamp if auction start time is not provided
        if (auction.getAuctionStartTime() == null) {
            auction.setAuctionStartTime(LocalDateTime.now());
        }
        return auctionRepository.save(auction);
    }

    @Override
    public Auction findById(String id) {
        Optional<Auction> optionalAuction = auctionRepository.findById(id);
        return optionalAuction.orElse(null);
    }

    @Override
    public Auction closeAuction(String id) {
        Auction auction = findById(id);
        if (auction != null) {
            // You can add additional logic here to handle closing the auction
            // For example, marking it as closed or determining the winning bidder
            // For now, let's just delete the auction
            auctionRepository.deleteById(id);
        }
        return auction;
    }

    // Implement other methods as needed
}
