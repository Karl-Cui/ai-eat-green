import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroceryListPage } from './grocery-list.page';

describe('GroceryListPage', () => {
  let component: GroceryListPage;
  let fixture: ComponentFixture<GroceryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroceryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
