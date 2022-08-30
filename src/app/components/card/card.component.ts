import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() photoCardHeader: string = "";
  @Input() thumbNail: string = "";
  @Input() picUrl: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
