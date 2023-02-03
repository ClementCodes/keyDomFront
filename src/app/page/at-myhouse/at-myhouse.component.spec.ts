import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtMyhouseComponent } from './at-myhouse.component';

describe('AtMyhouseComponent', () => {
  let component: AtMyhouseComponent;
  let fixture: ComponentFixture<AtMyhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtMyhouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtMyhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
