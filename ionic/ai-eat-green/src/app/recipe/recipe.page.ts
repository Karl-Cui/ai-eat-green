import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {


  recipe_name = "Zucchini Pesto Pasta"
  recipe_ingredients = ["2-3 medium zucchinis", "1/2 cup fresh basil", "500 mL Pesto sauce", "1/4 cup raw pine nuts", "1/4 cup olive oil", "2 cloves raw garlic", "2 tablespoons nutritional yeast or grated pumpkin seeds"]
  recipe_preparation = [
    "Slice zucchini into fettuccini noodles with a vegetable peeler or mandolin. If you have a spiral vegetable cutter, it will make beautiful spaghetti noodles!",
    "Blend all ingredients, except for the zucchini, in a food processor until smooth.",
    "Scoop zucchini pasta into bowls and top with pesto sauce.",
    "Add in vegetables of choice to add flavor, color and texture such as olives, sundried tomatoes, mushrooms, artichoke and colorful peppers."
  ]

  public slideOpts = {
    initialSlide: 1,
    speed: 200,
    slidesPerView: 2,
    autoplay: true
  };

  sustainability_figures = {
    "water": 8,
    "land": 10,
    "ghg": 12,
  }

  id: string;

  in_compare = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  addtocompare() {
    let compareRecipes = JSON.parse(localStorage.getItem('compareRecipes'))
    compareRecipes.push(this.id)
    localStorage.setItem('compareRecipes', JSON.stringify(compareRecipes));
    console.log(localStorage.getItem('compareRecipes'))
    this.in_compare = true;
  }

  removefromcompare() {
    let current_id  = this.id
    let compareRecipes = JSON.parse(localStorage.getItem('compareRecipes'))
    let filtered = compareRecipes.filter(function (value, index, arr) {
      if (value != current_id) {
        return true
      }
      return false
    });
    localStorage.setItem('compareRecipes', JSON.stringify(filtered));
    console.log(localStorage.getItem('compareRecipes'))
    this.in_compare = false;
  }

}
