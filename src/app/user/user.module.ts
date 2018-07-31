import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule, MatInputModule } from "@angular/material";
//import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forChild([{ path: "", component: UserComponent }])
  ],
  declarations: [UserComponent]
})
export class UserModule {}
