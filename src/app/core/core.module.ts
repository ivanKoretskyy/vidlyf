import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApiService } from "./api.service";
import { HttpClientModule } from "@angular/common/http";
import { LoginService } from "./login.service";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [ApiService, LoginService]
})
export class CoreModule {}
