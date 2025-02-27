import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../../modelos/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente10',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './componente10.component.html',
  styleUrl: './componente10.component.css'
})
export class Componente10Component {

  indicePessoaArmazenado:number = -1;

  myForm = new FormGroup(
      {
        nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
        idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
        cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
      }
  );
  btnCadastrar: boolean = true;;

  pessoas:Pessoa[] = [];

  cadastrarPessoa(){

    // Cadastrar form como(cast) pessoa no vetor
    this.pessoas.push(this.myForm.value as Pessoa);
  
    // Limpar form
    this.myForm.reset();

    // Apresentar cadastros
    console.table(this.pessoas);
  }

  selecionar(indicePessoaRecebido:number){
    this.indicePessoaArmazenado = indicePessoaRecebido;

    // Artibuir form com lista de pessoas(pessoa selecionada por indice)
    this.myForm.setValue(
      {
        nome : this.pessoas[this.indicePessoaArmazenado].nome,
        idade : this.pessoas[this.indicePessoaArmazenado].idade,
        cidade : this.pessoas[this.indicePessoaArmazenado].cidade
      }
    );
    // Visibilidade dos botões
    this.btnCadastrar = false;
  }

  alterar(){
    this.pessoas[this.indicePessoaArmazenado] = this.myForm.value as Pessoa;

    // Limpar form
    this.myForm.reset();

    // Visibilidade btnCadastro
    this.btnCadastrar = true;
  }

  excluir(){
    this.pessoas.splice(this.indicePessoaArmazenado, 1);
    
    // Limpar form
    this.myForm.reset();

    // Visibilidade btnCadastro
    this.btnCadastrar = true;
  }

  cancelar(){
    this.myForm.reset();
    this.btnCadastrar = true;
  }
}