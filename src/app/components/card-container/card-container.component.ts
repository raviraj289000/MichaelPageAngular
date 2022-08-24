import { Component, OnInit } from '@angular/core';
import { PhotoAlbumService } from 'src/app/services/photo-album.service';
import { take } from 'rxjs';
import { albumData } from 'src/app/models/photoLibraryModel';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  albumsCollection: any[] = [];
  albumDropdown: any = [];
  filteredCollection: any[] = [];

  constructor(private photoAlbumService: PhotoAlbumService) { }

  onChangeAlbum(e: any) {
    let filteredAlbums = this.albumsCollection.filter((item, ind) => {
      return e.value.albumSearchId === ind;
    })[0];

    this.filteredCollection.length = 0;

    for (let i = 0; i < filteredAlbums.length / 10; i++) {
      this.filteredCollection.push([]);
      this.filteredCollection[i].push(...filteredAlbums.slice(10 * i, 10 * (i + 1)));
    }
  }

  ngOnInit(): void {
    this.photoAlbumService.onFetchPhotoAlbums().pipe(take(1)).subscribe((data: albumData[]) => {
      let count = data.reduce((ar: any[], item: any) => {
        if (ar.indexOf(item.albumId) == -1) {
          ar.push(item.albumId);
        }
        return ar;
      }, []);

      const loopLength = Math.max(...count);

      this.albumDropdown = count.map((item: any, ind: number) => {
        return { albumName: "album " + item, albumSearchId: ind }
      });

      for (let i = 0; i < loopLength; i++) {
        this.albumsCollection.push([]);
        data.forEach((item: albumData, ind: number) => {
          if (item.albumId === i + 1) {
            this.albumsCollection[i].push(item);
          }
        });
      }
    });
  }
}
