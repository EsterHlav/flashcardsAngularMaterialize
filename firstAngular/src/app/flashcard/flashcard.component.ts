import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  // photo passed in from app-flashcard tag of app.component
  @Input() flashcard;

  // path to img folder
  baseUrl = 'assets/img/'

  constructor() {
  }

  ngOnInit() {
    this.flashcard.displayurl = this.baseUrl + this.flashcard.imageurl;
  }

}
