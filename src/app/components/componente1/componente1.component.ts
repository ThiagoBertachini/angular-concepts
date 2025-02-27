import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
  title = 'projeto-estudo';
  testoClicado: string = "Você clicou!"
  clicou: boolean = false;
  
  print() {
    this.clicou = true;
  }
}
