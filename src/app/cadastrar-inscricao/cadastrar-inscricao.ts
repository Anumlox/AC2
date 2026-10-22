import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../services/inscricao-service';

@Component({
  selector: 'app-cadastrar-inscricao',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-inscricao.html',
  styleUrl: './cadastrar-inscricao.css'
})
export class CadastrarInscricao {
  nome: string = '';
  email: string = '';
  oficina: string = 'Cozinheiro';

  constructor(public servico: InscricaoService) {}

  cadastrar(): void {
    this.servico.adicionar(this.nome, this.email, this.oficina);
    this.nome = '';
    this.email = '';
    this.oficina = 'Cozinheiro';
  }
}
