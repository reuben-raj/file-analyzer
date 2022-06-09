package com.illumina.fileanalyzer.controller;

import com.illumina.fileanalyzer.model.Statistics;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;

@RestController
public class MainController {

    private static final Logger log = LogManager.getLogger(MainController.class);

    @PostMapping("/upload")
    public @ResponseBody String handleFileUpload(@RequestParam("csvFile") MultipartFile file){
        String response = "";
        try{
            log.info("File processing...");
        } catch (Exception e){
            log.error("Error with file upload :",e);
        }
        return response;
    }

    @PostMapping("/statistics")
    public ResponseEntity getStatistics(@RequestParam("csvFile") MultipartFile file){
        int numWords=0,numLetters=0;
        try {
            BufferedReader fileReader = new BufferedReader(new
                    InputStreamReader(file.getInputStream(), "UTF-8"));
            CSVParser csvParser = new CSVParser(fileReader, CSVFormat.DEFAULT);
            List<CSVRecord> records = csvParser.getRecords();
            log.info("records size = "+records.size());
            for(CSVRecord row : records){
                for(String column: row){
                    numLetters += column.length();
                    String[] words = column.split("\\s+");
                    numWords += words.length;
                }
            }
        } catch (Exception e) {
            log.error("Error getStatistics : ",e);
        }
        Statistics stats = new Statistics(numWords,numLetters);
        return new ResponseEntity<Statistics>(stats, HttpStatus.OK);
    }

    @GetMapping("/healthcheck")
    public ResponseEntity getHealthcheck(){
        return new ResponseEntity("Server is up", HttpStatus.OK);
    }


}
