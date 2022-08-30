import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrls } from '../ap.config';
import { albumData } from '../models/photoLibraryModel';

@Injectable({
  providedIn: 'root'
})
export class PhotoAlbumService {

  constructor(private http: HttpClient) { }

  onFetchPhotoAlbums(): Observable<albumData[]> {
    return this.http.get<albumData[]>(apiUrls.getPhotoAlbums);
  }

}
