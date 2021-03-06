import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
  FormArray
} from "@angular/forms";

import { UserService } from "./user.service";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  profileForm;
  somefield = "tt";
  someBool = true;
  rating = 4;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.setProfileForm();
    this.profileForm.get("starts").disable();
  }
  setProfileForm() {
    this.profileForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["df", Validators.required],
      agree: [false],
      starts: [2],
      address: this.fb.group({
        street: [""],
        city: [""],
        state: [""],
        zip: [""]
      }),
      phones: this.fb.array([this.fb.control(""), this.fb.control("")])
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
    this.userService
      .createUser(this.profileForm.value)
      .subscribe(res => alert("success"));
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: "Ivan",
      address: {
        street: "zhovkivska"
      }
    });
  }
  checkedChanges(event) {
    console.log(event);
  }
  ratingChanged(rating) {
    console.log(rating);
  }
}
