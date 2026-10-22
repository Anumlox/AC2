
import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private tarefas: Tarefa[] = [];
  private proximoId: number = 1;

  // Lista todas as tarefas
  listar(): Tarefa[] {
    return this.tarefas;
  }

  // Adiciona uma nova tarefa
  adicionar(titulo: string, descricao: string, prazo: string): void {
    const novaTarefa: Tarefa = {
      id: this.proximoId++,
      titulo: titulo,
      descricao: descricao,
      prazo: prazo,
      concluida: false
    };

    this.tarefas.push(novaTarefa);
  }

  // Remove uma tarefa pelo ID
  remover(id: number): void {
    this.tarefas = this.tarefas.filter(
      tarefa => tarefa.id !== id
    );
  }

  // Altera o prazo de conclusão de uma tarefa
  definirPrazoConclusao(id: number, prazo: string): void {
    const tarefa = this.tarefas.find(
      tarefa => tarefa.id === id
    );

    if (tarefa) {
      tarefa.prazo = prazo;
    }
  }

  // Marca uma tarefa como concluída
  marcarConcluida(id: number): void {
    const tarefa = this.tarefas.find(
      tarefa => tarefa.id === id
    );

    if (tarefa) {
      tarefa.concluida = true;
    }
  }
}
