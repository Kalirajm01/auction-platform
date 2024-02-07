package com.auction.auctionbackend.controller;

import com.auction.auctionbackend.model.Auction;
import com.auction.auctionbackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {
    private final ProductService service;

    @Autowired
    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping("/auctions/list")
    public List<Auction> getAll() {
        return service.getAll();
    }
}

