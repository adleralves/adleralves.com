import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodComponent } from './fastfood.component';

describe('FastfoodComponent', () => {
  let component: FastfoodComponent;
  let fixture: ComponentFixture<FastfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
