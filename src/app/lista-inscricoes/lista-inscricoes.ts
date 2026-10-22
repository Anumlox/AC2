import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../services/inscricao-service';

@Component({
  selector: 'app-lista-inscricoes',
  imports: [RouterLink],
  templateUrl: './lista-inscricoes.html',
  styleUrl: './lista-inscricoes.css'
})
export class ListaInscricoes {
  constructor(public servico: InscricaoService) {}
}
