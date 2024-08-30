import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesAutomovelComponent } from './detalhes-automovel.component';

describe('DetalhesAutomovelComponent', () => {
  let component: DetalhesAutomovelComponent;
  let fixture: ComponentFixture<DetalhesAutomovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesAutomovelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesAutomovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
