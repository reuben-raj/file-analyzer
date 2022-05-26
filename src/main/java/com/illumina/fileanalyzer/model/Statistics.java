package com.illumina.fileanalyzer.model;

public class Statistics {
    int numWords;
    int numLetters;

    public Statistics(int numWords, int numLetters) {
        this.numWords = numWords;
        this.numLetters = numLetters;
    }

    public int getNumWords() {
        return numWords;
    }

    public void setNumWords(int numWords) {
        this.numWords = numWords;
    }

    public int getNumLetters() {
        return numLetters;
    }

    public void setNumLetters(int numLetters) {
        this.numLetters = numLetters;
    }
}
