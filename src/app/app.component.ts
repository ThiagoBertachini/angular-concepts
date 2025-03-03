import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from "./components/componente1/componente1.component";
import { Componente02Component } from "./components/componente02/componente02.component";
import { Componente03Component } from "./components/componente03/componente03.component";
import { Componente05Component } from "./components/componente05/componente05.component";
import { Componente04Component } from './components/componente04/componente04.component';
import { Componente06Component } from "./components/componente06/componente06.component";
import { Componente07Component } from "./components/componente07/componente07.component";
import { Componente08Component } from "./components/componente08/componente08.component";
import { Componente09Component } from "./components/componente09/componente09.component";
import { Componente10Component } from "./components/componente10/componente10.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente1Component, Componente02Component, Componente03Component, Componente04Component, Componente05Component, Componente06Component, Componente07Component, Componente08Component, Componente09Component, Componente10Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
