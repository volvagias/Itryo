import { Component } from '@angular/core';

@Component({
  selector: 'app-photos-fanarts',
  standalone: false,
  templateUrl: './photos-fanarts.component.html',
  styleUrls: ['./photos-fanarts.component.css']
})
export class PhotosFanartsComponent {

  // Para controlar cuál imagen está abierta
  openedImage: { src: string, text: string } | null = null;

  // Método para abrir popup
  openImage(src: string, text: string) {
    this.openedImage = { src, text };
  }

  // Cerrar popup
  closeImage() {
    this.openedImage = null;
  }

}

