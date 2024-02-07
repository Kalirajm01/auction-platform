package com.auction.auctionbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.io.InputStream;

@Service
public class FileStorageService {

    @Autowired
    private GridFsTemplate gridFsTemplate;

    public String storeFile(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        InputStream inputStream = file.getInputStream();
        gridFsTemplate.store(inputStream, fileName, file.getContentType());
        return fileName;
    }
}