import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipes = [
    {
      recipe_name: "Zucchini Pesto Pasta",
      recipe_ingredients: ["2-3 medium zucchinis", "1/2 cup fresh basil", "500 mL Pesto sauce", "1/4 cup raw pine nuts", "1/4 cup olive oil", "2 cloves raw garlic", "2 tablespoons nutritional yeast or grated pumpkin seeds"],
      recipe_preparation: [
        "Slice zucchini into fettuccini noodles with a vegetable peeler or mandolin. If you have a spiral vegetable cutter, it will make beautiful spaghetti noodles!",
        "Blend all ingredients, except for the zucchini, in a food processor until smooth.",
        "Scoop zucchini pasta into bowls and top with pesto sauce.",
        "Add in vegetables of choice to add flavor, color and texture such as olives, sundried tomatoes, mushrooms, artichoke and colorful peppers."
      ],
      recipe_img: "/assets/pasta.png",
      progress_bar_img: "/assets/score-letter2.png"
    },
    {
      recipe_name: "Zucchini Pesto Pasta",
      recipe_ingredients: ["12 oz. spaghetti or angel hair", "1 tbsp. extra-virgin olive oil", "3 lb. boneless, skinless chicken breasts", "2 cloves garlic", "2 c. diced tomatoes", "3 c. baby spinach", "1/3 c. freshly grated Parmesan"],
      recipe_preparation: [
        "In a large pot of salted boiling water, cook pasta according to package directions until al dente. Drain, reserving 1 cup pasta water.",
        "Meanwhile, in a large skillet over medium-high heat, heat oil. Season chicken with salt and pepper and cook until golden and no longer pink inside, about 8 minutes per side. Let rest 10 minutes, then thinly slice.",
        "Add garlic, tomatoes, and spinach to skillet and cook over medium heat until fragrant and slightly wilted, 2 minutes. Season with salt and pepper, then add heavy cream, Parmesan, and 1/2 cup of reserved pasta water. Simmer 5 minutes.",
        "Add cooked pasta and toss until fully coated, then add chicken and toss until combined. (For a looser sauce, stir in more reserved pasta water.)."
      ],
      recipe_img: "/assets/recipe/pasta.jpg",
      progress_bar_img: "/assets/chicken_score.png"
    }
  ]


  recipe_img = "/assets/pasta.png";
  recipe_name;
  recipe_ingredients;
  recipe_preparation;
  progress_bar_img;

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
    if (this.id == "128"){
      this.recipe_name = this.recipes[1].recipe_name
      this.recipe_ingredients = this.recipes[1].recipe_ingredients
      this.recipe_preparation = this.recipes[1].recipe_preparation
      this.recipe_img = this.recipes[1].recipe_img
      this.progress_bar_img = this.recipes[1].progress_bar_img
    } else {
      this.recipe_name = this.recipes[0].recipe_name
      this.recipe_ingredients = this.recipes[0].recipe_ingredients
      this.recipe_preparation = this.recipes[0].recipe_preparation
      this.recipe_img = this.recipes[0].recipe_img
      this.progress_bar_img = this.recipes[0].progress_bar_img
    }
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
