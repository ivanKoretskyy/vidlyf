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
import { UserService } from "./user.service";
import { LoginComponent } from "./login/login.component";
import { LoginModule } from "./login/login.module";
import { VidlyInputModule } from "./../components/vidly-input/vidly-input.module";
import { VidlyCheckboxModule } from "./../components/vidly-checkbox/vidly-checkbox.module";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./state/user.reducer";
import { SharedModule } from "./../components/shared.module";
import { UserResolver } from "./users.resolver";
//import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    LoginModule,
    RouterModule.forChild([
      { path: "register", component: UserComponent },
      { path: "login", component: LoginComponent },
      {
        path: "",
        component: UserListComponent,
        resolve: { users: UserResolver }
      }
    ]),
    StoreModule.forFeature("users", reducer),
    VidlyInputModule,
    VidlyCheckboxModule,
    SharedModule
  ],
  declarations: [UserComponent, UserListComponent],
  providers: [UserService, UserResolver]
})
export class UserModule {}
