import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.page.html',
  styleUrls: ['./challenge.page.scss'],
})
export class ChallengePage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  challenges = [
    {
      'name': 'Post your Food Pictures',
      'description': 'hello world'
    },
    {
      'name': 'Meatless for a Week',
      'description': 'hello world'
    },
    {
      'name': 'Try 3 new recipes',
      'description': 'hello world'
    }
  ];
  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
  }

}
