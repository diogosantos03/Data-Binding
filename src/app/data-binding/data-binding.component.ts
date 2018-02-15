import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  cursoAngular:boolean = true;
  urlImage:string = 'https://www.torcedores.com/content/uploads/2017/06/corinthians-mercado.jpg';

  getValor(){
    return 2;
  }
  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
