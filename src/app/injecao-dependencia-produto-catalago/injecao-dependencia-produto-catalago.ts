import { Component } from '@angular/core';
import { InjecaoDependenciaProduto } from '../injecao-dependencia-produto/injecao-dependencia-produto'

@Component({
  selector: 'app-injecao-dependencia-produto-catalago',
  imports: [],
  templateUrl: './injecao-dependencia-produto-catalago.html',
  styleUrl: './injecao-dependencia-produto-catalago.css',
})
export class InjecaoDependenciaProdutoCatalago {
  produtos: string[] = [];
  constructor(private produtoC: InjecaoDependenciaProduto){
    this.produtos = this.produtoC.listar();
  }
}
         