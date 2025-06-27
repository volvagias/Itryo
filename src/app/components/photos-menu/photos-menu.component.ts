import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos-menu',
  standalone: false,
  templateUrl: './photos-menu.component.html',
  styleUrl: './photos-menu.component.css'
})
export class PhotosMenuComponent {

  constructor(private router: Router) {}

  menuState: boolean = false;

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
