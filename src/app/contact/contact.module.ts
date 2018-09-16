import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact.component";
import { RouterModule } from "@angular/router";
import { GOOGLE_TOKEN } from "./google.service";

let google = window["google"];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: ContactComponent }])
  ],
  declarations: [ContactComponent],
  providers: [{ provide: GOOGLE_TOKEN, useValue: google }]
})
export class ContactModule {}
