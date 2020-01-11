import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage implements OnInit {

  constructor() { }

  sustainability_figures = {
    "water": 8,
    "land": 10,
    "ghg": 12,
  }

  ngOnInit() {
  }

}
