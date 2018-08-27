import { Component, OnInit, forwardRef, HostBinding, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'vidly-input',
  templateUrl: './vidly-input.component.html',
  styleUrls: ['./vidly-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VidlyInputComponent),
      multi: true
    }
  ]
})
export class VidlyInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input') input;
  @Input() formControlName: string;
  @Input() form: any;
  control: any;
  @Input('value') _value;
  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }
  constructor() { }

  ngOnInit() {
    this.setControll();
  }

  private setControll() {
    this.control = this.form ? this.form.get(this.formControlName) : new FormControl(this.value)
  }

  onChange = (_: any) => {};
  onTouched = () => {};

  //need to implement controlValueAccessor
  writeValue(value) {
    value && (this.value =value);
    this.onChange(value);
  }
  updateModel(value) {
    value && (this.value = value) 
    this.onChange(this.value);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }

}
