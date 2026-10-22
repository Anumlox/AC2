import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Produto = {
  id: number;
  nome: string;
  preco: number;
  imagem?: string;
};

// "type" define um item dentro do carrinho (produto + quantidade)
type ItemCarrinho = {
  produto: Produto;
  quantidade: number;
};

@Component({
  selector: 'app-ex1',
  imports: [FormsModule, CommonModule],
  templateUrl: './ex1.html',
  styleUrl: './ex1.css',
})
export class Ex1 {
  produtos: Produto[] = [
    { id: 1, nome: 'Camiseta', preco: 49.9 },
    { id: 2, nome: 'Tênis', preco: 199.9 },
    { id: 3, nome: 'Boné', preco: 39.9 },
    { id: 4, nome: 'Mochila', preco: 129.9 },
    { id: 5, nome: 'Meia', preco: 19.9 },
  ];
  carrinho: ItemCarrinho[] = [];

  adicionar(produto: Produto) {
    const item = this.carrinho.find((i) => i.produto.id === produto.id);
    if (item) {
      item.quantidade++;
    } else {
      this.carrinho.push({ produto, quantidade: 1 });
    }
  }

  remover(produto: Produto) {
    const item = this.carrinho.find((i) => i.produto.id === produto.id);
    if (!item) return;

    item.quantidade--;
    if (item.quantidade <= 0) {
      this.carrinho = this.carrinho.filter((i) => i.produto.id !== produto.id);
    }
  }

  removerTudo(produto: Produto) {
    this.carrinho = this.carrinho.filter((i) => i.produto.id !== produto.id);
  }

  limparCarrinho() {
    this.carrinho = [];
  }

  get quantidadeTotal(): number {
    return this.carrinho.reduce((soma, item) => soma + item.quantidade, 0);
  }

  get total(): number {
    return this.carrinho.reduce(
      (soma, item) => soma + item.produto.preco * item.quantidade,
      0
    );
  }
}