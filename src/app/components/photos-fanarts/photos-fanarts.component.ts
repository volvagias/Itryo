import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-photos-fanarts',
  standalone: false,
  templateUrl: './photos-fanarts.component.html',
  styleUrl: './photos-fanarts.component.css'
})
export class PhotosFanartsComponent {

  galleryId = 'albumesGallery';

  constructor(private gallery: Gallery) {}

  items: GalleryItem[] = [
    // Albumes
    new ImageItem({ src: '/assets/images/gallery/fanarts/fanart-1.jpg', thumb: '/assets/images/gallery/fanarts/fanart-1.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/fanarts/fanart-2.jpg', thumb: '/assets/images/gallery/fanarts/fanart-2.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/fanarts/fanart-3.jpg', thumb: '/assets/images/gallery/fanarts/fanart-3.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/fanarts/fanart-4.jpg', thumb: '/assets/images/gallery/fanarts/fanart-4.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/fanarts/fanart-5.jpg', thumb: '/assets/images/gallery/fanarts/fanart-5.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/fanarts/fanart-6.jpg', thumb: '/assets/images/gallery/fanarts/fanart-6.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/fanarts/fanart-7.jpg', thumb: '/assets/images/gallery/fanarts/fanart-7.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/fanarts/fanart-8.jpg', thumb: '/assets/images/gallery/fanarts/fanart-8.jpg' })
  ];

  ngOnInit(): void {
    // Cargar los elementos de la galería
    const galleryRef = this.gallery.ref(this.galleryId); // Le paso una referencia para que no me abra imagenes de otra galería.
    galleryRef.load(this.items);
  }

}
