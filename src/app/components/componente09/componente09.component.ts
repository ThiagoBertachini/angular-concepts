import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente09',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente09.component.html',
  styleUrl: './componente09.component.css'
})
export class Componente09Component {

  meuForm = new FormGroup(
    {
      "nome": new FormControl('', [Validators.required, Validators.minLength(3)]),
      "email": new FormControl('', [Validators.required, Validators.email])
    }
  )

  enviarForm() {
    if (this.meuForm.valid) {
      console.log("Formulário enviado", this.meuForm.value);
    } else {
      console.log("Preencha o formulário corretamente");
    }
  }
}
