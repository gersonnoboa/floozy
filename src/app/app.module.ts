import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumLengthComponent } from './album-length/album-length.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { AlbumLengthService } from './album-length/album-length.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumLengthComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
      AlbumLengthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
