import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MainModule } from "./main/main.module";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    MainModule,
    RouterModule.forRoot([
      { path: "users", loadChildren: "./user/user.module#UserModule" }
    ]),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
