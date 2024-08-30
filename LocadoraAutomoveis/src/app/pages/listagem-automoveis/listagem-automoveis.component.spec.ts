import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAutomoveisComponent } from './listagem-automoveis.component';

describe('ListagemAutomoveisComponent', () => {
  let component: ListagemAutomoveisComponent;
  let fixture: ComponentFixture<ListagemAutomoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemAutomoveisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemAutomoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
