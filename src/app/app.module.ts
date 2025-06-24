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
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NosotrosInfoComponent } from './components/nosotros-info/nosotros-info.component';
import { VideoHomeComponent } from './components/video-home/video-home.component';
import { MusicListenComponent } from './components/music-listen/music-listen.component';
import { LiveSessionComponent } from './components/live-session/live-session.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PhotosComponent } from './components/photos/photos.component';

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
    FooterComponent,
    NosotrosInfoComponent,
    VideoHomeComponent,
    MusicListenComponent,
    LiveSessionComponent,
    ContactComponent,
    ContactPageComponent,
    GalleryComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
