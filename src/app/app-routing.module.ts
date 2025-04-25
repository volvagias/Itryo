import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'itryo-music', component: MusicComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-page', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
