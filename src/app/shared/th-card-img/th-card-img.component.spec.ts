import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThCardImgComponent } from './th-card-img.component';

describe('ThCardImgComponent', () => {
  let component: ThCardImgComponent;
  let fixture: ComponentFixture<ThCardImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThCardImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThCardImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
