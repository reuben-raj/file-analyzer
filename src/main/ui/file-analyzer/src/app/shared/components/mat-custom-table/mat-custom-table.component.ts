import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TableColumn} from "../../models/tableColumn";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-mat-custom-table',
  templateUrl: './mat-custom-table.component.html',
  styleUrls: ['./mat-custom-table.component.css']
})
export class MatCustomTableComponent implements OnInit {

  constructor() { }

  @Input() columns: Array<TableColumn> = [];
  @Input() dataset: Array<any> = [];
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = this.displayedColumns.concat(this.columns.map(x => x.columnDef));
    this.dataSource = new MatTableDataSource<any>(this.dataset);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
