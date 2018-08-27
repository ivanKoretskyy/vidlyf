import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'vidly-checkbox',
  templateUrl: './vidly-checkbox.component.html',
  styleUrls: ['./vidly-checkbox.component.css']
})
export class VidlyCheckboxComponent implements OnInit, ControlValueAccessor {
  @Input('value') _value = false;
  get value() { return this._value; }
  set value(value) { 
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() { }

  ngOnInit() {
  }

  writeValue(value) {
    value && (this.value = value)
  }

  registerOnChange(fn) {
    
  }

  registerOnTouched(fn) {

  }

  toggle() {
    this.value = !this.value
  }


  // to create custom input 
  // 1 implement controll value Accessor
  // create property geteer setter value as input
  // implement writeValue function
  // implement registerOnChange function
  // implement registerOnTouched funciton
  // create two properties onChange and onTouched
  // call onChange and on Touched in set vale setter
}
