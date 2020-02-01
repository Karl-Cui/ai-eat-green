import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../discover/discover.module').then(m => m.DiscoverPageModule)
          }
        ]
      },
      {
        path: 'grocery-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../grocery-list/grocery-list.module').then(m => m.GroceryListPageModule)
          }
        ]
      },
      {
        path: 'records',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../records/records.module').then(m => m.RecordsPageModule)
          }
        ]
      },
      {
        path: 'recipe/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../recipe/recipe.module').then(m => m.RecipePageModule)
          }
        ]
      },
      {
        path: 'challenges',
        children: [
          {
            path: '',
            loadChildren: () => import('../challenges/challenges.module').then( m => m.ChallengesPageModule)
          }
        ]
      },
      {
        path: 'challenge/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../challenge/challenge.module').then( m => m.ChallengePageModule)
          }
        ]
      },
      {
        path: 'tabs/compare-recipes',
        children: [
          {
            path: '',
            loadChildren: () => import('../compare-recipes/compare-recipes.module').then( m => m.CompareRecipesPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
