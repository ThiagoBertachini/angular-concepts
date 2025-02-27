Caixa de Ferramentas - Angular

Este projeto serve como um repositório de conceitos e funcionalidades do Angular para futuras consultas e aprendizado. Aqui estão documentadas todas as funcionalidades utilizadas.

Tecnologias Utilizadas

Angular

Bootstrap (para estilização e componentes)

TypeScript

HTML/CSS

RxJS (para manipulação de fluxos assíncronos)

Angular Material (para componentes de UI modernos)

Funcionalidades Implementadas

1. Interpolacão de Dados

Exibe variáveis diretamente no HTML:

<h5>{{nome}}</h5>
<h5>{{cidade}}</h5>

2. Property Binding

Vincula propriedades do template ao componente:

<img [src]="img">
<button (click)="mudaImg()">Mudar Imagem</button>

3. Event Binding

Vincula eventos do DOM a métodos do componente:

<button (click)="acao()">Clique Aqui</button>

4. Two-Way Data Binding

Permite edição bidirecional dos dados entre o modelo e a interface:

<input type="text" name="nome" [(ngModel)]="nome">
<input type="text" name="cidade" [(ngModel)]="cidade">

5. Diretivas Estruturais

ngIf

Exibe ou oculta elementos com base em condição:

<div class="quadrado" *ngIf="exibir"></div>

ngSwitch

Exibe um conteúdo específico dependendo do valor de uma variável:

<div [ngSwitch]="linguagem">
    <p *ngSwitchCase="'HTML'">Linguagem de marcação</p>
    <p *ngSwitchCase="'CSS'">Linguagem de estilo</p>
    <p *ngSwitchCase="'JAVA'">Linguagem de programação</p>
    <p *ngSwitchDefault>Não identificável</p>
</div>

ngFor

Itera sobre listas para renderização de elementos dinâmicos:

<ul>
    <li *ngFor="let n of nomes; index as indice">{{n}} - {{indice}}</li>
</ul>

6. Diretivas de Estilização

ngStyle

Altera o estilo dinamicamente com base em condições:

<h2 class="texto" [ngStyle]="{'color': condicao ? 'green' : 'red'}">Aprendendo Angular</h2>

ngClass

Aplica classes dinamicamente:

<ul>
    <li *ngFor="let c of candidatos"
    [ngClass]="c === 'Aprovado' ? 'fonteVerde' : 'fonteVermelha'">{{c}}</li>
</ul>

7. Formulários Reativos

Usando FormGroup e FormControl:

<form [formGroup]="meuForm" (ngSubmit)="enviarForm()">
    <label>Nome:</label>
    <input type="text" formControlName="nome">
    <div *ngIf="meuForm.get('nome')?.invalid && meuForm.get('nome')?.touched">
        Nome é obrigatório
    </div>
    
    <label>Email:</label>
    <input type="email" formControlName="email">
    <div *ngIf="meuForm.get('email')?.invalid && meuForm.get('email')?.touched">
        Email é obrigatório
    </div>
    
    <button type="submit" [disabled]="meuForm.invalid">Enviar</button>
</form>

8. Consumo de API com HttpClient

Utilização do HttpClientModule para chamadas HTTP:

this.http.get('https://api.exemplo.com/dados').subscribe(response => {
    this.dados = response;
});

9. Uso de Observables com RxJS

Gerenciamento de fluxos assíncronos:

this.dadosService.getDados().pipe(
    map(dados => dados.filter(d => d.ativo)),
    catchError(err => of([]))
).subscribe(dadosFiltrados => this.dados = dadosFiltrados);

10. Modais com Bootstrap

Utilização de modais do Bootstrap para exibir conteúdo:

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Abrir Modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal Title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="button" class="btn btn-primary">Salvar</button>
            </div>
        </div>
    </div>
</div>

11. Tabelas Dinâmicas

Exibe uma tabela preenchida dinamicamente:

<table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
            <th>Selecionar</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let p of pessoas; index as indice">
            <td>{{indice + 1}}</td>
            <td>{{p.nome}}</td>
            <td>{{p.idade}}</td>
            <td>{{p.cidade}}</td>
            <td><button class="btn btn-primary" (click)="selecionar(indice)">Selecionar</button></td>
        </tr>
    </tbody>
</table>
