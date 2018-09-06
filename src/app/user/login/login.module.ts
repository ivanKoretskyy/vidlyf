import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { MatInputModule, MatButtonModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule {}
