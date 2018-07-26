import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./navigation.component";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule {}
