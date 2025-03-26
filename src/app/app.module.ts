import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopInfoComponent } from './components/top-info/top-info.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MusicComponent } from './pages/music/music.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ItryoPortadaComponent } from './components/itryo-portada/itryo-portada.component';

@NgModule({
  declarations: [
    AppComponent,
    TopInfoComponent,
    HomeComponent,
    HeaderComponent,
    MusicComponent,
    AboutUsComponent,
    ItryoPortadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
