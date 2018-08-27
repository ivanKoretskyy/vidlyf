import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidlyInputComponent } from './vidly-input.component';

describe('VidlyInputComponent', () => {
  let component: VidlyInputComponent;
  let fixture: ComponentFixture<VidlyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidlyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidlyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
