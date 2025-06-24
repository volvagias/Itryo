import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-photos',
  standalone: false,
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {

  galleryId = 'albumesGallery';

  constructor(private gallery: Gallery) {}

  items: GalleryItem[] = [
    // Albumes
    new ImageItem({ src: '/assets/images/gallery/band-contact.jpg', thumb: '/assets/images/gallery/band-contact.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/band-music-listen.jpg', thumb: '/assets/images/gallery/band-music-listen.jpg' })
  ];

  ngOnInit(): void {
    // Cargar los elementos de la galería
    const galleryRef = this.gallery.ref(this.galleryId); // Le paso una referencia para que no me abra imagenes de otra galería.
    galleryRef.load(this.items);
  }

}
