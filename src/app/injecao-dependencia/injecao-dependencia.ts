import { Component } from '@angular/core';
import { InjecaoDependenciaLogger } from '../injecao-dependencia-logger/injecao-dependencia-logger';

@Component({
  selector: 'app-injecao-dependencia',
  imports: [],
  templateUrl: './injecao-dependencia.html',
  styleUrl: './injecao-dependencia.css',
})
export class InjecaoDependencia {
constructor(private logger: InjecaoDependenciaLogger) {
  this.logger.log('App iniciado');
  }
}
