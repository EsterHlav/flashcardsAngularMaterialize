import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { GridFlashcardComponent } from './grid-flashcard/grid-flashcard.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    FlashcardComponent,
    GridFlashcardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
