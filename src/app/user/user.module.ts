import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatInputModule,
  MatTableModule
} from "@angular/material";
import { UserListComponent } from "./user-list/user-list.component";
//import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    RouterModule.forChild([
      { path: "register", component: UserComponent },
      { path: "", component: UserListComponent }
    ])
  ],
  declarations: [UserComponent, UserListComponent]
})
export class UserModule {}
