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
      'description': 'Post pictures of the recipe you made! This can be done on the recipe page.',
      'image': '/assets/recipe/salad.jpg',
      'joined': false
    },
    {
      'name': 'Meatless for a Week',
      'description': 'Make one or more recipes per day for a week, but they must all be vegetarian recipes. It\'s time to go meatless!',
      'image': '/assets/recipe/vegetable.jpg',
      'joined': false
    },
    {
      'name': 'Try 3 new recipes',
      'description': 'Cook 3 new recipes. Try searching up dishes or ingredients that you are interested in, or take a look at your recommended recipes!',
      'image': '/assets/recipe/cooking.jpg',
      'joined': false
    }
  ];
  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  joinChallenge(id) {
    this.challenges[id].joined = true;
  }

  leaveChallenge(id) {
    this.challenges[id].joined = false;
  }

}
