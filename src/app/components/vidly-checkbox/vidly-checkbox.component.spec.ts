import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidlyCheckboxComponent } from './vidly-checkbox.component';

describe('VidlyCheckboxComponent', () => {
  let component: VidlyCheckboxComponent;
  let fixture: ComponentFixture<VidlyCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidlyCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidlyCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
