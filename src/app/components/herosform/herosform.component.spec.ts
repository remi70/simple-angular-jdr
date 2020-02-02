import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosformComponent } from './herosform.component';

describe('HerosformComponent', () => {
  let component: HerosformComponent;
  let fixture: ComponentFixture<HerosformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
