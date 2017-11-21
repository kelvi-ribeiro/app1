import{Component} from '@angular/core/'

@Component({
    selector: 'app-topo', // Método para definir o seletor da aplicação, que será instanciado na view
    //seletor :'[app-topo]', Outro método para definir o seletor, dessa vez, como atributo.
   //seletor :'.app-topo' Outro método para definir o seletor, dessa vez, como classe. 
    
    
    //template:'<p>Esse é o componente topo</p>' ESSE É OUTRO JEITO DE ASSOCIOAR O TEMPLATE, MÉTODO INLINE, SEM QUEBRA DE LINHA
/*template:`<p>Esse
é o
Componente
Topo</p>` // Esse é outro método, usando crases(shift+`) podendo-se ter quebras de linha, facilitando a visualização do código*/
templateUrl: './topo.component.html' , //ESSE É UM JEITO DE ASSOCIAR O TEMPLATE AO COMPONENT, COM ARQUIVO EXTERNO 
styleUrls:['./topo.component.css']
//styles:['.exemplo {color:red}'] //Esse é um jeito de associar o estilo ao componente.
/*styles:[`.exemplo 

{color:red}`]   Esse é outro jeito de associar, usando a crase(backtits) permitindo quebra de linha*/
})
   export class TopoComponent {
       public titulo:string = 'Apredendo Inglês'
   }