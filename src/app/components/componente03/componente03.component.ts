import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  imports: [CommonModule],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
  exibir:boolean=true;

  acao() {
    if(this.exibir===true){
      this.exibir=false;
    } else {
      this.exibir=true;
    }
  }
}
