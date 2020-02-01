import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs/grocery-list',
    loadChildren: () => import('./grocery-list/grocery-list.module').then( m => m.GroceryListPageModule)
  },
  {
    path: 'tabs/discover',
    loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'tabs/recipe/:id',
    loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
  },
  {
    path: 'tabs/credits',
    loadChildren: () => import('./credits/credits.module').then( m => m.CreditsPageModule)
  },
  {
    path: 'tabs/records',
    loadChildren: () => import('./records/records.module').then( m => m.RecordsPageModule)
  },
  {
    path: 'tabs/challenges',
    loadChildren: () => import('./challenges/challenges.module').then( m => m.ChallengesPageModule)
  },
  {
    path: 'tabs/challenges/:id',
    loadChildren: () => import('./challenge/challenge.module').then( m => m.ChallengePageModule)
  },
  {
    path: 'tabs/compare-recipes',
    loadChildren: () => import('./compare-recipes/compare-recipes.module').then( m => m.CompareRecipesPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
