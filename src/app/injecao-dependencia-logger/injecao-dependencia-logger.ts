import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-injecao-dependencia-logger',
  imports: [],
  templateUrl: './injecao-dependencia-logger.html',
  styleUrl: './injecao-dependencia-logger.css',
})
@Injectable({ providedIn: 'root'})
export class InjecaoDependenciaLogger {
  log(mensagem: string) {
    console.log('LOG', mensagem);
  }
}
