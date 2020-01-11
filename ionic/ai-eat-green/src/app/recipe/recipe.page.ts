import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  constructor() { }

  recipe_name = "Raw Zucchini Pesto Pasta"
  recipe_ingredients = ["2-3 medium zucchinis", "1/2 cup fresh basil", "1/4 cup raw pine nuts", "1/4 cup olive oil", "2 cloves raw garlic", "2 tablespoons nutritional yeast or grated pumpkin seeds"]
  recipe_preparation = [
    "Slice zucchini into fettuccini noodles with a vegetable peeler or mandolin. If you have a spiral vegetable cutter, it will make beautiful spaghetti noodles!",
    "Blend all ingredients, except for the zucchini, in a food processor until smooth.",
    "Scoop zucchini pasta into bowls and top with pesto sauce.",
    "Add in vegetables of choice to add flavor, color and texture such as olives, sundried tomatoes, mushrooms, artichoke and colorful peppers."
  ]

  sustainability_figures = {
    "water": 8,
    "land": 10,
    "ghg": 12,
  }

  ngOnInit() {

  }

}
