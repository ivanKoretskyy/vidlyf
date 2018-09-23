import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayComponent } from "./play.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: PlayComponent
      }
    ])
  ],
  declarations: [PlayComponent]
})
export class PlayModule {}
