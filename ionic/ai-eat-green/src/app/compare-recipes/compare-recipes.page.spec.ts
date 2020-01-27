import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompareRecipesPage } from './compare-recipes.page';

describe('CompareRecipesPage', () => {
  let component: CompareRecipesPage;
  let fixture: ComponentFixture<CompareRecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareRecipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompareRecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
