import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSliderComponent } from './attribute-slider.component';

describe('AttributeSliderComponent', () => {
  let component: AttributeSliderComponent;
  let fixture: ComponentFixture<AttributeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
