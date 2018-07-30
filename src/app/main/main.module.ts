import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { NavigationModule } from "./../navigation/navigation.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NavigationModule,
    RouterModule.forRoot([
      { path: "register", loadChildren: "./user/user.module#UserModule" }
    ])
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule {}
