import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  HostBinding
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "vidlyf-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true
    }
  ]
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  @Input()
  rating = 3;
  @Input()
  disabled = false;
  @Output()
  ratingChanged = new EventEmitter();
  onChange = (rating: number) => {};
  onTouched = () => {};
  @HostBinding("style.opacity")
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }
  constructor() {}

  ngOnInit() {}

  setRating(number) {
    if (!this.disabled) {
      this.onTouched();
      this.rating = this.rating === number ? number - 1 : number;
      this.onChange(this.rating);
      this.ratingChanged.emit(number);
    }
  }

  writeValue(value) {
    this.rating = value || 0;
    this.onChange(this.rating);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
