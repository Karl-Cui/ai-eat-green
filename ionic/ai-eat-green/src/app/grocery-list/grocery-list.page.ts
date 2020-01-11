import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.page.html',
  styleUrls: ['./grocery-list.page.scss'],
})
export class GroceryListPage implements OnInit {

  constructor(public toastController: ToastController) { }

  public items = [
                        {name:"apples", checkedoff: false, score: 60},
                        {name:"tofu", checkedoff: false, score: 60}]

  ngOnInit() {
  }

  addItem(){
    this.items.push({name:"", checkedoff: false, score: 0})
  }

  async saveToast() {
    const toast = await this.toastController.create({
      message: 'Your grocery list have been saved.',
      duration: 2000
    });
    toast.present();
  }

}
