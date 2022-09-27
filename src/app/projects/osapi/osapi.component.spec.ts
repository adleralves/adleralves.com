import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsapiComponent } from './osapi.component';

describe('OsapiComponent', () => {
  let component: OsapiComponent;
  let fixture: ComponentFixture<OsapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
