package com.illumina.fileanalyzer.controller;

import com.illumina.fileanalyzer.model.Statistics;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class MainController {

    private static final Logger log = LogManager.getLogger(MainController.class);

    @PostMapping("/upload")
    public @ResponseBody
    String handleFileUpload(@RequestParam("csvFile") MultipartFile file){
        String response = "";
        try{
            log.info("File processing...");


        } catch (Exception e){
            log.error("Error with file upload :",e);
        }
        return response;
    }

    @GetMapping("/statistics")
    public ResponseEntity getStatistics(int numWords, int numLetters){

        Statistics stats = new Statistics(numWords,numLetters);
        return new ResponseEntity<Statistics>(stats, HttpStatus.OK);
    }


}
