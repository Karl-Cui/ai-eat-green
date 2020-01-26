import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { GroceryListService } from './grocery-list.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.page.html',
  styleUrls: ['./grocery-list.page.scss'],
})
export class GroceryListPage implements OnInit {

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private GroceryListService: GroceryListService
  ) { }

  private current_idx = 0;
  public items = [
    {
      name: "Apples",
      checkedoff: false,
      score: 60,
      healthyalt: false,
      healthyalt_name: "",
      healthyalt_desc: "",
    },
    {
      name: "Tofu",
      checkedoff: false,
      score: 60,
      healthyalt: false,
      healthyalt_name: "",
      healthyalt_desc: "",
    },
    {
      name: "Brie cheese",
      checkedoff: false,
      score: 30,
      healthyalt: true,
      healthyalt_name: "Feta cheese",
      healthyalt_desc: "Feta cheese uses less water and GHGs in its production cycle than Brie cheese."
    },
  ]

  ngOnInit() {
    this.getGroceryList("user")
  }

  addItem(){
    this.items.push({
      name: "",
      checkedoff: false,
      score: 0,
      healthyalt: false,
      healthyalt_name: "",
      healthyalt_desc: "",
    })
  }

  async saveToast() {
    const toast = await this.toastController.create({
      message: 'Your grocery list have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentAlertAlternative(idx) {
    let item = this.items[idx];
    this.current_idx = idx;

    const alert = await this.alertController.create({
      header: "A Greener Alternative ".concat(item.healthyalt_name),
      message: item.healthyalt_desc,
      buttons: [
        {
          text: 'Change',
          role: 'cancel',
          handler: () => {
            this.replaceWithAlternative(this.current_idx);
          }
        }, {
          text: 'Keep',
          role: 'cancel',
        }
      ]
    });

    await alert.present();
  }

  replaceWithAlternative(idx) {
    this.items[idx].name = this.items[idx].healthyalt_name;
    this.items[idx].healthyalt = false;
  }

  getGroceryList(user) {
    this.GroceryListService.getGroceryList(user).subscribe((response)=>{
        console.log(response)
      },
      error => {
        console.log(error)
      }
    );
  }

}
