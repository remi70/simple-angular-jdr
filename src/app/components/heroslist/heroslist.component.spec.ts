import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroslistComponent } from './heroslist.component';

describe('HeroslistComponent', () => {
  let component: HeroslistComponent;
  let fixture: ComponentFixture<HeroslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
