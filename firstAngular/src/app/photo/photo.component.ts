import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  // photo passed in from app-photo tag of app.component
  @Input() photo;

  // path to img folder
  baseUrl = 'assets/img/'

  constructor() {
  }

  ngOnInit() {
    this.photo.displayurl = this.baseUrl + this.photo.imageurl;
  }

}
