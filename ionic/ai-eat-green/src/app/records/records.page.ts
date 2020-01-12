import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs'

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

  user_goal_percent = 0.8;
  goal_bar = 0;


  secondsCounter = interval(5000);
 


  ngOnInit() {
    console.log(this.goal_bar);
    
    setTimeout(() => {
      this.timeoutrecursion();
    }
    , 2000);
  }

  timeoutrecursion(){
    setTimeout(() => {
      if (this.goal_bar <= this.user_goal_percent ) { 
        this.goal_bar = this.goal_bar +0.01;
        this.timeoutrecursion();
      }
      else { 
        this.timeoutrecursion();
      }
    }
    , 10);
  }

}
