import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFavortiosComponent } from './cards-favortios.component';

describe('CardsFavortiosComponent', () => {
  let component: CardsFavortiosComponent;
  let fixture: ComponentFixture<CardsFavortiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsFavortiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsFavortiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
