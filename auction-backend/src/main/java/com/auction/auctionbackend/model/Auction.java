package com.auction.auctionbackend.model;


import org.hibernate.annotations.Entity;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.time.LocalDateTime;

@Document(collection = "Auctions")
public class Auction {
    @Id
    private String id;
    private String itemName;
    private double startingPrice;
    private LocalDateTime auctionStartTime;
    private LocalDateTime auctionEndTime;
    private double bidIncrement;
    private String productImage; // You can store the image path or URL here
    private String description;
    // Add getters and setters

    public Auction() {
    }

    public Auction(String id, String itemName, double startingPrice, LocalDateTime auctionStartTime, LocalDateTime auctionEndTime, double bidIncrement, String productImage, String description) {
        this.id = id;
        this.itemName = itemName;
        this.startingPrice = startingPrice;
        this.auctionStartTime = auctionStartTime;
        this.auctionEndTime = auctionEndTime;
        this.bidIncrement = bidIncrement;
        this.productImage = productImage;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public double getStartingPrice() {
        return startingPrice;
    }

    public void setStartingPrice(double startingPrice) {
        this.startingPrice = startingPrice;
    }

    public LocalDateTime getAuctionStartTime() {
        return auctionStartTime;
    }

    public void setAuctionStartTime(LocalDateTime auctionStartTime) {
        this.auctionStartTime = auctionStartTime;
    }

    public LocalDateTime getAuctionEndTime() {
        return auctionEndTime;
    }

    public void setAuctionEndTime(LocalDateTime auctionEndTime) {
        this.auctionEndTime = auctionEndTime;
    }

    public double getBidIncrement() {
        return bidIncrement;
    }

    public void setBidIncrement(double bidIncrement) {
        this.bidIncrement = bidIncrement;
    }

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}


//public class Auction {
//    @Id
//    private String auctionId;
//    private String sellerId;
//    private String itemDescription;
//    private double startingPrice;
//    private double currentHighestBid;
//    private Date auctionStartTime;
//    private Date auctionEndTime;
//    private double bidIncrement;
//    private String status;
//
//    public Auction() {}
//    public Auction(String auctionId, String sellerId, String itemDescription, double startingPrice, double currentHighestBid,Date auctionStartTime, Date auctionEndTime, double bidIncrement, String status) {
//        this.auctionId = auctionId;
//        this.sellerId = sellerId;
//        this.itemDescription = itemDescription;
//        this.startingPrice = startingPrice;
//        this.currentHighestBid = currentHighestBid;
//        this.auctionStartTime = auctionStartTime;
//        this.auctionEndTime = auctionEndTime;
//        this.bidIncrement = bidIncrement;
//        this.status = status;
//    }
//
//    public String getAuctionId() {
//        return auctionId;
//    }
//
//    public void setAuctionId(String auctionId) {
//        this.auctionId = auctionId;
//    }
//
//    public String getSellerId() {
//        return sellerId;
//    }
//
//    public void setSellerId(String sellerId) {
//        this.sellerId = sellerId;
//    }
//
//    public String getItemDescription() {
//        return itemDescription;
//    }
//
//    public void setItemDescription(String itemDescription) {
//        this.itemDescription = itemDescription;
//    }
//
//    public double getStartingPrice() {
//        return startingPrice;
//    }
//
//    public void setStartingPrice(double startingPrice) {
//        this.startingPrice = startingPrice;
//    }
//
//    public double getCurrentHighestBid() {
//        return currentHighestBid;
//    }
//
//    public void setCurrentHighestBid(double currentHighestBid) {
//        this.currentHighestBid = currentHighestBid;
//    }
//
//    public double getBidIncrement() {
//        return bidIncrement;
//    }
//
//    public void setBidIncrement(double bidIncrement) {
//        this.bidIncrement = bidIncrement;
//    }
//
//    public Date getAuctionEndTime() {
//        return auctionEndTime;
//    }
//
//    public void setAuctionEndTime(Date auctionEndTime) {
//        this.auctionEndTime = auctionEndTime;
//    }
//
//    public String getStatus() {
//        return status;
//    }
//
//    public void setStatus(String status) {
//        this.status = status;
//    }
//
//    // Getters and setters
//}
