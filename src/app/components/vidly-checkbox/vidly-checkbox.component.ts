import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'vidly-checkbox',
  templateUrl: './vidly-checkbox.component.html',
  styleUrls: ['./vidly-checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VidlyCheckboxComponent),
      multi: true
    }
  ]
})
export class VidlyCheckboxComponent implements OnInit, ControlValueAccessor {
  _value = false;
  @Input() FormControlName;
  // get value() { return this._value; }
  
  @Input() value;
  // set value(value) { 
  //   this._value = value;
  //   this.onChange(value);
  //   this.onTouched();
  // }
  control = new FormControl(this.value);
  onChange: any = (_) => {};
  onTouched: any = () => {};

  constructor() { }

  ngOnInit() {
  }

  writeValue(value) {
  
    this.value = !!value
    this.onChange(this.value);
    
  }

  registerOnChange(fn) {
    
  }

  registerOnTouched(fn) {

  }

  toggle() {
    debugger;
   // this.value = !this.value;
    this.onChange(this.value);
  }


  // to create custom input 
  // 1 implement controll value Accessor
  // create property geteer setter value as input
  // implement writeValue function
  // implement registerOnChange function
  // implement registerOnTouched funciton
  // create two properties onChange and onTouched
  // call onChange and on Touched in set vale setter
  // import NG_VALUE_ACCESSOR
  // provide ngValueAccessor in providers array
  // import forvardRef from angular core needed to create 
}
