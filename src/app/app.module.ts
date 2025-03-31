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
import { LogoPortadaComponent } from './components/logo-portada/logo-portada.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopInfoComponent,
    HomeComponent,
    HeaderComponent,
    MusicComponent,
    AboutUsComponent,
    ItryoPortadaComponent,
    LogoPortadaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
