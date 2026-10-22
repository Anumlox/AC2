import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  nome: string = 'Nicolas';
  mostrar = false;
  frutas: string[] = ['Maçã', 'Banana', 'Laranja'];
  Selecionada = "";
  cor: string='blue';
  contador: number = 0;
  incrementar(){this.contador++;}
  decrementar(){this.contador--;}
}
