import { Component, OnInit,OnChanges,Input } from '@angular/core';
import {Coracao} from '../shared/coracao.model'


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit,OnChanges {
  
  @Input() public tentativas:number

  public coracoes:Coracao[] = [
    new Coracao (true), //Só precisamos passar o parâmetro do atributo cheio, pois as outras duas já vem valor default
    new Coracao (true),
    new Coracao (true),
  ]

  

  constructor() {
    
    
   }
   

  ngOnInit() {
  }
  ngOnChanges() {
    if(this.tentativas!==this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice -1].cheio = false
      
    } //3-2=1
  }
  }


