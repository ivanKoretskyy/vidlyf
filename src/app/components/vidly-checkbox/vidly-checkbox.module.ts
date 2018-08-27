import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VidlyCheckboxComponent } from './vidly-checkbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VidlyCheckboxComponent],
  exports: [VidlyCheckboxComponent]
})
export class VidlyCheckboxModule { }
