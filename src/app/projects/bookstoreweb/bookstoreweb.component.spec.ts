import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstorewebComponent } from './bookstoreweb.component';

describe('BookstorewebComponent', () => {
  let component: BookstorewebComponent;
  let fixture: ComponentFixture<BookstorewebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstorewebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookstorewebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
