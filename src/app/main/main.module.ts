import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { NavigationModule } from "./../navigation/navigation.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NavigationModule,
    RouterModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule {}
