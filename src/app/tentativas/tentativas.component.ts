import { Component, OnInit } from '@angular/core';
import {Coracao} from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
  public coracaoVazio:string = '/assets/coracao_vazio.png'
  public coracaoCheio:string = '/assets/coracao_cheio.png'

  public coracoes:Coracao[] = [
    new Coracao (true), //Só precisamos passar o parâmetro do atributo cheio, pois as outras duas já vem valor default
    new Coracao (true),
    new Coracao (true),
  ]

  

  constructor() {
    console.log(this.coracaoCheio)
   }

  ngOnInit() {
  }

}
