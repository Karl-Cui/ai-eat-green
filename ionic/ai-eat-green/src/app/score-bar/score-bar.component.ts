import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score-bar',
  templateUrl: './score-bar.component.html',
  styleUrls: ['./score-bar.component.scss'],
})
export class ScoreBarComponent implements OnInit {

  constructor() { }

  @Input('sustainability_figures') sustainability_figures: any;

  score = { lower: 1200, upper: 1400 }

  ngOnInit() {
    
  }

  

}
