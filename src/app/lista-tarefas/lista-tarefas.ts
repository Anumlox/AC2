
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Tarefa } from '../models/tarefa';
import { TarefaService } from '../services/tarefa-service';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css'
})
export class ListaTarefas {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {
    this.atualizarLista();
  }

  atualizarLista(): void {
    this.tarefas = this.tarefaService.listar();
  }

  remover(id: number): void {
    this.tarefaService.remover(id);
    this.atualizarLista();
  }

  concluir(id: number): void {
    this.tarefaService.marcarConcluida(id);
    this.atualizarLista();
  }

  get total(): number {
    return this.tarefas.length;
  }

  get concluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }

  get pendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }
}
