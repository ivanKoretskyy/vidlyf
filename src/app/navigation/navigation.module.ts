import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./navigation.component";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./state/navigation.reducer";
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    StoreModule.forFeature("navigation", reducer)
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule {}
