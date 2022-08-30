import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { delay, of } from 'rxjs';
import { PhotoAlbumService } from 'src/app/services/photo-album.service';

import { CardContainerComponent } from './card-container.component';

describe('CardContainerComponent', () => {
  let component: CardContainerComponent;
  let fixture: ComponentFixture<CardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContainerComponent],
      providers: [PhotoAlbumService],
      imports: [HttpClientModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onFetchAlbums to get data', fakeAsync(() => {
    let fixture = TestBed.createComponent(CardContainerComponent);
    let component = fixture.debugElement.componentInstance;
    let photoAlbumService = fixture.debugElement.injector.get(PhotoAlbumService);
    let stub = spyOn(photoAlbumService, 'onFetchPhotoAlbums').and.callFake(() => {
      return of([]).pipe(delay(400));
    });
    component.onFetchAlbums();
    tick(400);
    expect(component.albumsCollection.length).toBe(0);
  }));


  it('albumsCollection should be defined', () => {
    expect(component.albumsCollection).toEqual([]);
  });

  it('albumDropdown should be defined', () => {
    expect(component.albumDropdown).toEqual([]);
  });

  it('filteredCollection should be a defined', () => {
    expect(component.filteredCollection).toEqual([]);
  });

});
