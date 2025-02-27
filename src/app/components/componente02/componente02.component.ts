import { Component } from '@angular/core';

@Component({
  selector: 'app-componente02',
  imports: [],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.css'
})
export class Componente02Component {

  img: string = 'assets/dia.jpg';

  mudaImg() {
    if (this.img === 'assets/dia.jpg') {
      this.img = 'assets/noite.jpg';
    } else {
      this.img = 'assets/dia.jpg';
    }
  }

}