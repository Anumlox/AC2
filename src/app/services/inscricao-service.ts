import { Injectable } from '@angular/core';
import { Inscricao } from '../models/inscricao';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {
  private inscricoes: Inscricao[] = [];
  private proximoId = 1;

  oficinas: string[] = ['Cozinheiro', 'Jardineiro', 'Motorista'];

  listar(): Inscricao[] {
    return this.inscricoes;
  }

 adicionar(nome: string, email: string, oficina: string): void {

  const novaInscricao: Inscricao = {
    id: this.proximoId++,
    nome: nome,
    email: email,
    oficina: oficina,
    status: 'Pendente'
  };

  this.inscricoes.push(novaInscricao);
}


  remover(id: number): void {
    this.inscricoes = this.inscricoes.filter(
      inscricao => inscricao.id !== id
    );
  }

  confirmarInscricao(id: number): void {
    const inscricao = this.inscricoes.find(
      inscricao => inscricao.id === id
    );

    if (inscricao) {
      inscricao.status = 'Confirmada';
    }
  }

  total(): number {
    return this.inscricoes.length;
  }

  confirmadas(): number {
    return this.inscricoes.filter(
      inscricao => inscricao.status === 'Confirmada'
    ).length;
  }

  pendentes(): number {
    return this.inscricoes.filter(
      inscricao => inscricao.status === 'Pendente'
    ).length;
  }
}
