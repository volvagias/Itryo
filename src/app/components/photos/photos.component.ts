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
    new ImageItem({ src: '/assets/images/gallery/shows/shows-1.jpg', thumb: '/assets/images/gallery/shows/shows-1.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-2.JPG', thumb: '/assets/images/gallery/shows/shows-2.JPG' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-3.jpg', thumb: '/assets/images/gallery/shows/shows-3.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-4.jpg', thumb: '/assets/images/gallery/shows/shows-4.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-5.jpg', thumb: '/assets/images/gallery/shows/shows-5.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-6.jpg', thumb: '/assets/images/gallery/shows/shows-6.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-7.jpg', thumb: '/assets/images/gallery/shows/shows-7.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-8.JPG', thumb: '/assets/images/gallery/shows/shows-8.JPG' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-9.JPG', thumb: '/assets/images/gallery/shows/shows-9.JPG' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-10.jpg', thumb: '/assets/images/gallery/shows/shows-10.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-11.jpg', thumb: '/assets/images/gallery/shows/shows-11.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-12.jpg', thumb: '/assets/images/gallery/shows/shows-12.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-13.jpg', thumb: '/assets/images/gallery/shows/shows-13.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-15.JPG', thumb: '/assets/images/gallery/shows/shows-15.JPG' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-16.jpg', thumb: '/assets/images/gallery/shows/shows-16.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-17.JPG', thumb: '/assets/images/gallery/shows/shows-17.JPG' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-18.jpg', thumb: '/assets/images/gallery/shows/shows-18.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-20.jpg', thumb: '/assets/images/gallery/shows/shows-20.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-21.jpg', thumb: '/assets/images/gallery/shows/shows-21.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-22.jpg', thumb: '/assets/images/gallery/shows/shows-22.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-23.jpg', thumb: '/assets/images/gallery/shows/shows-23.jpg' }),
    new ImageItem({ src: '/assets/images/gallery/shows/shows-24.jpg', thumb: '/assets/images/gallery/shows/shows-24.jpg' })
  ];

  ngOnInit(): void {
    // Cargar los elementos de la galería
    const galleryRef = this.gallery.ref(this.galleryId); // Le paso una referencia para que no me abra imagenes de otra galería.
    galleryRef.load(this.items);
  }

}
