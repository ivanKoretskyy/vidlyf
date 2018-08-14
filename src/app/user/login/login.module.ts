import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { MatInputModule, MatButtonModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginService } from "./login.service";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule {}
