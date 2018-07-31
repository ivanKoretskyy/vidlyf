import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
  FormArray
} from "@angular/forms";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  profileForm;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.setProfileForm();
  }
  setProfileForm() {
    this.profileForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: [""],
      address: this.fb.group({
        street: [""],
        city: [""],
        state: [""],
        zip: [""]
      }),
      phones: this.fb.array([this.fb.control("192")])
    });
  }
  get phones() {
    return this.profileForm.get("phones") as FormArray;
  }
  addPhone() {
    this.profileForm.phones.push(this.fb.control(""));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: "Ivan",
      address: {
        street: "zhovkivska"
      }
    });
  }
}
