import { Component, OnInit } from '@angular/core';

import {Frase} from '../shared/frase.model'

import {FRASES} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases:Frase [] = FRASES
  public  instrucao:string = 'Traduza essa frase'
  public resposta:string = ''

  public rodada:number = 0
  public rodadaFrase:Frase

  public progresso:number = 0

  public tentativas:number = 3
  constructor() { 
    this.atualizaRodada()
  
    }

  ngOnInit() {
  }

 public atualizaResposta(resposta:Event):void{
   this.resposta = ((<HTMLInputElement>resposta.target).value)
   //console.log(this.resposta)
  }

  public verificarResposta():void{
    if(this.rodadaFrase.frasePtBr==this.resposta){
      

       //Trocar pergunta da rodada
    this.rodada++
    //Atualizando o progresso
    this.progresso = this.progresso + (100/this.frases.length)

    //
    if(this.rodada===FRASES.length){
      alert('Colcuiu as traduções com sucesso!')
    }
    
    
    //Atualiza o objeto rodadaFrase
   
    this.atualizaRodada()
    
    

      
    
    }else {
      alert('A tradução está errada')
      //Diminuindo a variável tentativas
      this.tentativas--
      if(this.tentativas===-1){
        alert('Você perdeu todas as tentativas')
      }
    }
   
  }

  public atualizaRodada():void{
    //Define a frase da rodada com em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]

    //Limpando a frase
    this.resposta = ''
  }

}
