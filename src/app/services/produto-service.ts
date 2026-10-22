import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos = ['Mouse',  'Teclado', 'Monitor'];

  listar(): string[]{
    return this.produtos;
  }
}
