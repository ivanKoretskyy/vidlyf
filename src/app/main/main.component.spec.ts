import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MainComponent } from "./main.component";
import { NavigationModule } from "./../navigation/navigation.module";
import { Store, StoreModule } from "@ngrx/store";
describe("MainComponent", () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [
        NavigationModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature("navigation", (s, a) => s)
      ],
      providers: [
        { provide: Store, useValue: { pipe: () => ({ subscribe: () => {} }) } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit("should create", () => {
    expect(component).toBeTruthy();
  });
});
