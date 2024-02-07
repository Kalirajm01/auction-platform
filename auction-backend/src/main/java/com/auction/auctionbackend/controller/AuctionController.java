package com.auction.auctionbackend.controller;

import com.auction.auctionbackend.model.Auction;
import com.auction.auctionbackend.service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/auctions")
public class AuctionController {
    @Autowired
    private AuctionService auctionService;

    @PostMapping("/create")
    public ResponseEntity<Auction> createAuction(@RequestBody Auction auction, @RequestParam("productImage")  MultipartFile photo) {
        Auction createdAuction = auctionService.createAuction(auction);
        createdAuction.setProductImage(photo.getOriginalFilename());
        return new ResponseEntity<>(createdAuction, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Auction> getAuctionById(@PathVariable String id) {
        Auction auction = auctionService.findById(id);
        return new ResponseEntity<>(auction, HttpStatus.OK);
    }

    @PutMapping("/{id}/close")
    public ResponseEntity<Auction> closeAuction(@PathVariable String id) {
        Auction closedAuction = auctionService.closeAuction(id);
        return new ResponseEntity<>(closedAuction, HttpStatus.OK);
    }

    // Implement bidding endpoint as needed
}

//@RestController
//@RequestMapping("/api/auctions")
//public class AuctionController {
//
//    @Autowired
//    private AuctionService auctionService;
//
//    // Endpoint for creating a new auction listing
//    @PostMapping("/create")
//    public ResponseEntity<Auction> createAuction(@RequestBody Auction auction) {
//        Auction createdAuction = auctionService.createAuction(auction);
//        return new ResponseEntity<>(createdAuction, HttpStatus.CREATED);
//    }
//
//    // Endpoint for retrieving details of a specific auction by its ID
//    @GetMapping("/{id}")
//    public ResponseEntity<Auction> getAuctionById(@PathVariable("id") String id) {
//        Auction auction = auctionService.getAuctionById(id);
//        if (auction != null) {
//            return new ResponseEntity<>(auction, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    // Endpoint for closing an active auction
//    @PutMapping("/{id}/close")
//    public ResponseEntity<Void> closeAuction(@PathVariable("id") String id) {
//        boolean closed = auctionService.closeAuction(id);
//        if (closed) {
//            return new ResponseEntity<>(HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    // Add other controller methods for updating, deleting, etc.
//}
