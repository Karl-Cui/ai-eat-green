import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompareRecipesPageRoutingModule } from './compare-recipes-routing.module';

import { CompareRecipesPage } from './compare-recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompareRecipesPageRoutingModule
  ],
  declarations: [CompareRecipesPage]
})
export class CompareRecipesPageModule {}
