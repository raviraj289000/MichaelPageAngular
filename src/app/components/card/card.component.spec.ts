import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardContainerComponent } from '../card-container/card-container.component';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent, CardContainerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('photoCardHeader should be defined', () => {
    expect(component.photoCardHeader).toBeDefined();
  });

  it('thumbNailUrl should be defined', () => {
    expect(component.thumbNail).toBeDefined();
  });

  it('picUrl should be a defined', () => {
    expect(component.picUrl).toBeDefined();
  });

  // it('thumbNailUrl should contains https://via.placeholder.com', () => {
  //   expect(component.thumbNail).toContain("https://via.placeholder.com");
  // });

  // it('picUrl should contains https://via.placeholder.com', () => {
  //   expect(component.picUrl).toContain('https://via.placeholder.com');
  // });

});
