import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente07',
  imports: [CommonModule],
  templateUrl: './componente07.component.html',
  styleUrl: './componente07.component.css'
})
export class Componente07Component {
  media:number = 4;

  nomes:string[] = ["Alex", "Bruna", "Davi", "Carla"];

  linguagem:string = "HTML";
}
