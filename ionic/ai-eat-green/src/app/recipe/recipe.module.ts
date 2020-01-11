import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared.module';

import { RecipePageRoutingModule } from './recipe-routing.module';

import { RecipePage } from './recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RecipePageRoutingModule
  ],
  declarations: [RecipePage]
})
export class RecipePageModule {}
