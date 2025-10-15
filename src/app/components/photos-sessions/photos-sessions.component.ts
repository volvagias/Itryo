import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-photos-sessions',
  standalone: false,
  templateUrl: './photos-sessions.component.html',
  styleUrl: './photos-sessions.component.css'
})
export class PhotosSessionsComponent {

  galleryId = 'albumesGallery';

  constructor(private gallery: Gallery) {}

  items: GalleryItem[] = [
    // Albumes
    new ImageItem({ src: '/assets/images/gallery/sessions/sessions-1.jpg', thumb: '/assets/images/gallery/sessions/sessions-1.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/sessions/sessions-2.jpg', thumb: '/assets/images/gallery/sessions/sessions-2.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/sessions/sessions-3.jpg', thumb: '/assets/images/gallery/sessions/sessions-3.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/sessions/sessions-4.jpg', thumb: '/assets/images/gallery/sessions/sessions-4.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/sessions/sessions-5.jpg', thumb: '/assets/images/gallery/sessions/sessions-5.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/sessions/sessions-6.jpg', thumb: '/assets/images/gallery/sessions/sessions-6.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/sessions/sessions-7.jpg', thumb: '/assets/images/gallery/sessions/sessions-7.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/sessions/sessions-8.jpg', thumb: '/assets/images/gallery/sessions/sessions-8.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/sessions/sessions-9.jpg', thumb: '/assets/images/gallery/sessions/sessions-9.jpg' }),
  ];

  ngOnInit(): void {
    // Cargar los elementos de la galería
    const galleryRef = this.gallery.ref(this.galleryId); // Le paso una referencia para que no me abra imagenes de otra galería.
    galleryRef.load(this.items);
  }

}
