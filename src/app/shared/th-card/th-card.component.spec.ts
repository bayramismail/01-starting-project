import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThCardComponent } from './th-card.component';

describe('ThCardComponent', () => {
  let component: ThCardComponent;
  let fixture: ComponentFixture<ThCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
