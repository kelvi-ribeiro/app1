import{Component} from '@angular/core/'

@Component({
    selector: 'app-topo',
    
    //template:'<p>Esse é o componente topo</p>' ESSE É OUTRO JEITO DE ASSOCIOAR O TEMPLATE, MÉTODO INLINE, SEM QUEBRA DE LINHA
/*template:`<p>Esse
é o
Componente
Topo</p>` // Esse é outro método, usando crases(shift+`) podendo-se ter quebras de linha, facilitando a visualização do código*/
templateUrl: './topo.component.html'  //ESSE É UM JEITO DE ASSOCIAR O TEMPLATE AO COMPONENT, COM ARQUIVO EXTERNO 
})
   export class TopoComponent {
   }