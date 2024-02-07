package com.auction.auctionbackend.service;

import com.auction.auctionbackend.model.Auction;
import com.auction.auctionbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repository;

    @Autowired
    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Auction> getAll() {
        return repository.findAll();
    }
}

