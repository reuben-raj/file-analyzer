import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { FilehandlerService } from "../filehandler.service";
import { Statistics } from "./statistics";

@Component({
  selector: 'app-filehandler',
  templateUrl: './filehandler.component.html',
  styleUrls: ['./filehandler.component.css']
})
export class FilehandlerComponent implements OnInit {

  constructor(
    private ngxCsvParser: NgxCsvParser,
    private filehandlerService: FilehandlerService) { }

  header: boolean = true;
  csvRecords: any;
  statistics: Statistics = {numWords:0,numLetters:0};
  _object = Object;
  // data: any[];

  @ViewChild('csvReader') csvReader: any;

  ngOnInit(): void {
    /*this.data = [{
      "name": "Molly Pope",
      "date": "Jul 27, 2021",
      "company": "Faucibus Orci Institute",
      "country": "New Zealand",
      "city": "Campinas",
      "phone": "1-403-634-0276"
    }]*/
  }

  fileChangeListener($event: any): void {

    const files = $event.srcElement.files;
    this.header = (this.header as unknown as string) === 'true' || this.header === true;

    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe({
      next: (result): void => {
        console.log('Result', result);
        this.csvRecords = result;
        this.getFileStatistics();
      },
      error: (error: NgxCSVParserError): void => {
        console.log('Error', error);
      }
    });
  }

  getFileStatistics() {
    this.statistics.numWords=0;
    this.statistics.numLetters=0;

    let records = this.csvRecords;
    for(let record of records){

      for(let key in record){
        let val = record[key];
        this.statistics.numLetters += val.length;
        if(val != undefined){
          let wordArr = val.split(' ');
          this.statistics.numWords += wordArr.length;
        }
      }
    }
  }

  /*getCSVHeader() {
    return (this.csvRecords && this.csvRecords.length > 0) ? this.csvRecords[0] : [];
  }*/

  /*getFileStatistics(): void {
    this.filehandlerService.getStatistics().subscribe(statistics => this.statistics = statistics);
  }*/

}
