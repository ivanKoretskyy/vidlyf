import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VidlyInputComponent } from './vidly-input.component';
import { FormsModule, FormControl,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [VidlyInputComponent],
  exports: [VidlyInputComponent]
})
export class VidlyInputModule { }
