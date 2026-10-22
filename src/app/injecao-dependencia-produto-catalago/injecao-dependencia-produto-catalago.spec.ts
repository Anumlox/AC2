import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjecaoDependenciaProdutoCatalago } from './injecao-dependencia-produto-catalago';

describe('InjecaoDependenciaProdutoCatalago', () => {
  let component: InjecaoDependenciaProdutoCatalago;
  let fixture: ComponentFixture<InjecaoDependenciaProdutoCatalago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjecaoDependenciaProdutoCatalago],
    }).compileComponents();

    fixture = TestBed.createComponent(InjecaoDependenciaProdutoCatalago);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
