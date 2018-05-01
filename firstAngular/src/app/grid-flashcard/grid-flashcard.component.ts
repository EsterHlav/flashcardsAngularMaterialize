import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-flashcard',
  templateUrl: './grid-flashcard.component.html',
  styleUrls: ['./grid-flashcard.component.css']
})
export class GridFlashcardComponent implements OnInit {

  @Input() Listflashcard;
  @Input() nbRows;
  rg;

  constructor() {
  }

  ngOnInit() {
    this.rg = Array();
    for (var i = 0; i < this.nbRows; i++) {
      this.rg.push(i);
    }
  }

}
