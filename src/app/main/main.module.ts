import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { NavigationModule } from "./../navigation/navigation.module";

@NgModule({
  imports: [CommonModule, NavigationModule],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule {}
