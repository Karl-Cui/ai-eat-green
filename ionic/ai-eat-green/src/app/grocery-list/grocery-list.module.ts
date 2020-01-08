import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroceryListPageRoutingModule } from './grocery-list-routing.module';

import { GroceryListPage } from './grocery-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroceryListPageRoutingModule
  ],
  declarations: [GroceryListPage]
})
export class GroceryListPageModule {}
