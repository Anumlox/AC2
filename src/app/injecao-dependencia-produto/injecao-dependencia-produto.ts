import { Component, Injectable } from '@angular/core'

@Component({
  selector: 'app-injecao-dependencia-produto',
  imports: [],
  templateUrl: './injecao-dependencia-produto.html',
  styleUrl: './injecao-dependencia-produto.css',
})

@Injectable({ providedIn: 'root' })
export class InjecaoDependenciaProduto {
  produtos = ['Teclado', 'Mouse', 'Monitor'];
  listar() {return this.produtos}
}
