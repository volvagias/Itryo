import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotosEnsayosComponent } from './components/photos-ensayos/photos-ensayos.component';
import { PhotosSessionsComponent } from './components/photos-sessions/photos-sessions.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'itryo-music', component: MusicComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'photos-ensayos', component: PhotosEnsayosComponent },
  { path: 'photos-sessions', component: PhotosSessionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
