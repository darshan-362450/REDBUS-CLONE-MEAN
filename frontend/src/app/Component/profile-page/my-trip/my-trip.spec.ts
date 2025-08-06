import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTrip } from './my-trip';

describe('MyTrip', () => {
  let component: MyTrip;
  let fixture: ComponentFixture<MyTrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTrip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTrip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
