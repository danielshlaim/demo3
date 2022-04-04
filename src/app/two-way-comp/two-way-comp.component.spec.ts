import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayCompComponent } from './two-way-comp.component';

describe('TwoWayCompComponent', () => {
  let component: TwoWayCompComponent;
  let fixture: ComponentFixture<TwoWayCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
