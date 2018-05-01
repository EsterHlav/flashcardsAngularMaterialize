import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFlashcardComponent } from './grid-flashcard.component';

describe('GridFlashcardComponent', () => {
  let component: GridFlashcardComponent;
  let fixture: ComponentFixture<GridFlashcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFlashcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
