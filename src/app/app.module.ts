import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { FichaComponent } from './ficha/ficha.component';
import { HeaderSimpleComponent } from './header-simple/header-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    MensajeComponent,
    FichaComponent,
    HeaderSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
