import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  /*styles: [
  `
  .destaque{
    background-color:  aqua;
    font-weight: bold;
  }

  `
]*/
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  cursoAngular:boolean = true;
  urlImage:string = 'https://www.torcedores.com/content/uploads/2017/06/corinthians-mercado.jpg';

  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver:boolean = false;
  isMouseOverTitle:boolean = false;
  nome: string = "abc";

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor(){
    return 2;
  }
  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }
  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  //#VaiCorinthians
  onKeyUp(evento: KeyboardEvent){
    /*console.log((<HTMLInputElement>evento.target).value);*/
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  mouseOver(){
    this.isMouseOverTitle = !this.isMouseOverTitle;
  }

  constructor() { }

  ngOnInit() {
  }

}
