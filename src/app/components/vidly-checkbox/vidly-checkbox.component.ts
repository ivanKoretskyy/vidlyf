import {
  Component,
  OnInit,
  Input,
  forwardRef,
  Output,
  EventEmitter
} from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControlName,
  FormControl
} from "@angular/forms";

@Component({
  selector: "vidly-checkbox",
  templateUrl: "./vidly-checkbox.component.html",
  styleUrls: ["./vidly-checkbox.component.css"],
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
  @Input()
  FormControlName;
  // get value() { return this._value; }
  @Input()
  form: any;
  @Input()
  value;
  checked: boolean = false;
  @Input()
  control = new FormControl();
  onModelChange: any = _ => {};
  onTouched: any = () => {};
  @Output()
  onChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  writeValue(value) {
    this.checked = !!value;
    this.onModelChange(this.checked);
    this.onChange.emit(this.checked);
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {}

  toggle() {
    this.checked = !this.checked;
    this.onModelChange(this.checked);
    this.onChange.emit(this.checked);

    if (this.form && this.control) {
      this.control.setValue(this.checked);
    }
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
