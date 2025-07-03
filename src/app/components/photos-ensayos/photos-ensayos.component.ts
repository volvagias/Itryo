import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-photos-ensayos',
  standalone: false,
  templateUrl: './photos-ensayos.component.html',
  styleUrl: './photos-ensayos.component.css'
})
export class PhotosEnsayosComponent {

  galleryId = 'albumesGallery';

  constructor(private gallery: Gallery) {}

  items: GalleryItem[] = [
    // Albumes
    new ImageItem({ src: '/assets/images/gallery/ensayos/ensayos-1.jpg', thumb: '/assets/images/gallery/ensayos/ensayos-1.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/ensayos/ensayos-2.jpg', thumb: '/assets/images/gallery/ensayos/ensayos-2.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/ensayos/ensayos-3.jpg', thumb: '/assets/images/gallery/ensayos/ensayos-3.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/ensayos/ensayos-4.jpeg', thumb: '/assets/images/gallery/ensayos/ensayos-4.jpeg' })
  ];

  ngOnInit(): void {
    // Cargar los elementos de la galería
    const galleryRef = this.gallery.ref(this.galleryId); // Le paso una referencia para que no me abra imagenes de otra galería.
    galleryRef.load(this.items);
  }

}