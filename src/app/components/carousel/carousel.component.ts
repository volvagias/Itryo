import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  
  constructor(private router: Router) {}

  // función para scrollear hacia abajo desde el carousel.
  scrollDown() {
    // Primero nos aseguramos de que la página ha cargado completamente el componente de destino.
    setTimeout(() => {
      const target = document.getElementById('target-section'); 
      // este target-section también lo coloco como un id en la etiqueta del componente "video-home".

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
