import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MainModule } from "./main/main.module";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { CoreModule } from "./core/core.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment.prod";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./core/auth-interceptor.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: "vidly App",
      maxAge: 25,
      logOnly: environment.production
    }),
    MainModule,
    RouterModule.forRoot([
      { path: "users", loadChildren: "./user/user.module#UserModule" },
      {
        path: "contacts",
        loadChildren: "./contact/contact.module#ContactModule"
      },
      {
        path: "grid",
        loadChildren: "./grid/grid.module#GridModule"
      },
      {
        path: "play",
        loadChildren: "./play/play.module#PlayModule"
      }
    ]),
    CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
