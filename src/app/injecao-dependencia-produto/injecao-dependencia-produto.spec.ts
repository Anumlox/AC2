import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjecaoDependenciaProduto } from './injecao-dependencia-produto';

describe('InjecaoDependenciaProduto', () => {
  let component: InjecaoDependenciaProduto;
  let fixture: ComponentFixture<InjecaoDependenciaProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjecaoDependenciaProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(InjecaoDependenciaProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
