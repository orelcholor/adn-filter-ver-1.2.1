import { Component, ElementRef, Input, OnInit, Renderer2, EventEmitter, Output, ViewChildren, QueryList } from '@angular/core';


@Component({
  selector: 'adn-posting',
  templateUrl: './adn-posting.component.html',
  styleUrls: ['./adn-posting.component.css']
})
export class AdnPostingComponent implements OnInit {

  /*** MUESTRA EN EL PREVIEW */
    //info recibida del elemento padre
    @Input() txtareaAdn!: string; //fila que se mostrara en el preview
    @Input() numFila!: string; //numero de fila en el array

    adnDivided: Array<string> = [];//fila  de matriz separada letra por letra
  /*** */

  /***EDICION EN EL PREVIEW */
    @Input() arrayCompleto!: Array<string>;//array recibido para editar

    @Output() envioArray = new EventEmitter();//para enviar el array modificado en el preview

    letraValue!: string; //guardado de letra en edicion 

    @ViewChildren('inputLetra') listaLetras!: QueryList<ElementRef> // listado de letras que se muestran en la matriz
  /*** */
  

  constructor(
    private renderer: Renderer2,
    public elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.txtareaString()
  }

  // ngAfterViewInit(){ 
    
  //   /***funfiona */
  //     // let m : Array<any> = this.listaLetras.toArray();
  //     // console.log(m);
  //     // let item ='';
  //     // if(m.length == 6){
  //     //   for (let i = 0; i < m.length; i++) {
  //     //     const e = m[i];
  //     //     item += e.nativeElement.value;
  //     //   }
  //     //   console.log(item);
  //     // }
  //   /*** */
  // }

  //convierte las filas string en arrays para mostrarlos en el template
  txtareaString(){
    this.adnDivided = Array.from(this.txtareaAdn);
  }

  //guarda el valor de la casilla 
  onClickLetra(index: number){
    const letra = this.listaLetras.toArray()[index];
    this.letraValue = letra.nativeElement.value;
    //console.log(this.letraValue);
    letra.nativeElement.select();  
  }

  //aqui se realiza el cambio de letra
  onBlurLetra(index: number){
    //comvertimos el queryList a un array
    const letra = this.listaLetras.toArray()[index]
    if(letra.nativeElement.value == ''){//si esta vacio reponemos el valor que tenia
      letra.nativeElement.value = this.letraValue;
      this.renderer.setValue(letra.nativeElement, this.letraValue);
      this.letraValue = '';
    }else{//se obtiene info necesaria y actualizamos
      const nuevaLetra = letra.nativeElement.value;
      const fila = parseInt(this.numFila);
      const columna = index;
      this.actualizarArray(fila, columna, nuevaLetra);
    }
  }

  //funcion que realiza el cambio de letra en el arrat
  actualizarArray(fila: number, columna: number, nuevo: string){
    let nuevaFila = '';
    //recorremos el array original
    for (let i = 0; i < this.arrayCompleto.length; i++) {
      if (i == fila){//cuando encontramos la fila editada
        const e = this.arrayCompleto[fila];
        //sustituimos la letra nueva en su respectivo lugar de la fila
        nuevaFila = e.substring(0,columna) + nuevo + e.substring(columna + nuevo.length)
      }
    }
    //enviamos con un eventEmiter la nueva fila y su posicion en la matriz
    this.envioArray.emit({nuevaFila, fila});
  }
}
