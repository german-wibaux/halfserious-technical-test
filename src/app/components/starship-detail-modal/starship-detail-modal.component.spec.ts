import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipDetailModalComponent } from './starship-detail-modal.component';

describe('StarshipDetailModalComponent', () => {
  let component: StarshipDetailModalComponent;
  let fixture: ComponentFixture<StarshipDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
