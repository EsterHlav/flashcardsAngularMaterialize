import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './flashcard/flashcard.component.css']
})

export class AppComponent {

  // Returns numPhotos - here simply to show that we can make
  //  a method call in a template expression
  getNumberOfFlashcards() {
    return this.flashcardList.length;
  }

  // get the number of rows to create (= floor of division by 3)
  getNumberOfRows() {
    return Math.floor(this.getNumberOfFlashcards()/3);
  }

  flashcardList = [
    {
      imageurl: "animals/dog5.jpg",
      op1: "pes",
      op2: "sova",
      op3: "kôñ",
      true: 1
    },
    {
      imageurl: "animals/lion.jpg",
      op1: "slon",
      op2: "lion",
      op3: "hus",
      true: 2
    },
    {
      imageurl: "animals/koala.jpg",
      op1: "koza",
      op2: "ryba",
      op3: "koala",
      true: 3
    },
    {
      imageurl: "animals/koala.jpg",
      op1: "koza",
      op2: "ryba",
      op3: "koala",
      true: 3
    },
    {
      imageurl: "animals/dog5.jpg",
      op1: "pes",
      op2: "sova",
      op3: "kôñ",
      true: 1
    },
    {
      imageurl: "animals/lion.jpg",
      op1: "slon",
      op2: "lion",
      op3: "hus",
      true: 2
    }
  ]

}
