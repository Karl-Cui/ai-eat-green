import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { }



  cuisine = [
    "Afghan",
    "African",
    "Albanian",
    "Algerian",
    "Alsatian",
    "American",
    "Armenian",
    "Argentine",
    "Asian",
    "Australian",
    "Austrian",
    "Auvergne",
    "Bagels",
    "Bakery",
    "Bangladeshi",
    "Barbecue",
    "Belgian",
    "Bistro",
    "Brazilian",
    "British",
    "Burgers",
    "Burgundy",
    "Burmese",
    "Cafe",
    "Cajun",
    "Californian",
    "Calzones",
    "Cambodian",
    "Caribbean",
    "Cheesesteaks",
    "Chicken",
    "Chilean",
    "Chinese",
    "Chowder",
    "Coffee",
    "Colombian",
    "Contemporary",
    "Continental",
    "Corsica",
    "Creole",
    "Crepes",
    "Cuban",
    "Cuban",
    "Czech",
    "Deli",
    "Dim Sum",
    "Diner",
    "Dominican",
    "Donuts",
    "Dutch",
    "Eastern European",
    "Eclectic",
    "Egyptian",
    "English",
    "Ethiopian",
    "Ecuadorean",
    "European",
    "Fast Food",
    "Filipino",
    "Fish and Chips",
    "Fondue",
    "French",
    "Frozen Yogurt",
    "Fusion",
    "Gastropub",
    "German",
    "Greek",
    "Grill",
    "Gyros",
    "Haitian",
    "Halal",
    "Hawaiian",
    "Healthy",
    "Hot Dogs",
    "Ice Cream",
    "Indian",
    "Indonesian",
    "International",
    "Irish",
    "Israeli",
    "Italian",
    "Jamaican",
    "Japanese",
    "Juices",
    "Korean",
    "Korean Barbeque",
    "Kosher",
    "Latin",
    "Latin American",
    "Lebanese",
    "Lyonnais",
    "Malaysian",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Mongolian",
    "Moroccan",
    "Nepalese",
    "Noodle Bar",
    "Norwegian",
    "Organic",
    "Oysters",
    "Pacific Rim",
    "Pakistani",
    "Pan Asian",
    "Pasta",
    "Pastries",
    "Persian",
    "Peruvian",
    "Pho",
    "Pizza",
    "Polish",
    "Polynesian",
    "Portuguese",
    "Provençal",
    "Pub Food",
    "Puerto Rican",
    "Raw",
    "Ribs",
    "Russian",
    "Salad",
    "Salvadoran",
    "Sandwiches",
    "Savoy",
    "Scandinavian",
    "Seafood",
    "Senegalese",
    "Singaporean",
    "Smoothies",
    "Soul Food",
    "Soup",
    "South American",
    "South African",
    "South Pacific",
    "Southern",
    "Southwestern",
    "Spanish",
    "Steak",
    "Steakhouse",
    "Subs",
    "Sushi",
    "Taiwanese",
    "Tapas",
    "Tea",
    "Tex Mex",
    "Thai",
    "Tibetan",
    "Traditional",
    "Tunisian",
    "Turkish",
    "Ukrainian",
    "Vegan",
    "Vegetarian",
    "Venezuelan",
    "Vietnamese",
    "Wings",
    "Wraps"
  ]

  allergies = [
    "Egg",
    "Fish",
    "Peanuts",
    "Shellfish",
    "Sesame",
    "Wheat",
    "Milk"
  ]

  cusine_obj = []

  allergies_obj = []

  my_deit = []
  my_cusines = []
  my_dislikes = []
  my_allergies = []
  my_cooking = []

  state = 0;
  ngOnInit() {
    this.cuisine.forEach(element => {
      this.cusine_obj.push({ name: element, checkedoff: false })
    });
    this.allergies.forEach(element => {
      this.allergies_obj.push({ name: element, checkedoff: false })
    })
  }

  register(form) {
    this.state = 1
  }

  forward() {
    this.state = this.state + 1;
    if (this.state == 4) {
      this.redirect()
    }
  }

  redirect() {
    this.router.navigate(['tabs/discover']);
  }

}
