import { Component } from '@angular/core';

@Component({
  selector: 'app-post2',
  imports: [],
  templateUrl: './post2.html',
  styleUrl: './post2.css',
})
export class Post2 {
  titulo: string = 'foto';
  autor: string = 'Carlos';
  data = Date;
  conteudo: string = 'novelas';
  curtidas: number = 0;
  comentarios: string[] = [];
}

