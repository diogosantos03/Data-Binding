import { Component, OnInit, ngOnInit, ngOnChanges, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit,ngOnInit,ngOnChanges, ngDoCheck,
ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked,ngOnDestroy{

  @Input() valorInicial: number = 10;


  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges(){
    console.log('gnOnChanges');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }

}
