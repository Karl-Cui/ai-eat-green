import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompareRecipesPage } from './compare-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: CompareRecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompareRecipesPageRoutingModule {}
