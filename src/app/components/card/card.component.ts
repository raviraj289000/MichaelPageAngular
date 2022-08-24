import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 
  @Input() photoCardHeader:any;
  @Input() thumbNail:any;
  @Input() picUrl:any;

  constructor() { }

  ngOnInit(): void {
  }

}
