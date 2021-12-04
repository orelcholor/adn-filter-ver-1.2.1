import { Component, OnInit, Input } from '@angular/core';

//import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'adn-results',
  templateUrl: './adn-results.component.html',
  styleUrls: ['./adn-results.component.css']
})
export class AdnResultsComponent implements OnInit {
  //para resultados de consulta
  @Input() arrayAdn: Array<string> = [];
  public adnDivided: Array<string> = [];
  public adnDivided2: Array<string> = [];

  //para el preview del textarea
  // @Input() txtareaAdn: string ='';

  constructor() {
   
  }
  /*** para resultados de consulta ***/
  ngOnInit(): void {
    // console.log(this.txtareaAdn + '._.XD')
    this.fromString();
  }
  fromString(){
    this.adnDivided = Array.from(this.arrayAdn);
    // this.adnDivided2 = Array.from(this.txtareaAdn);
    //console.log(this.adnDivided);
  }

  // getForm(){
  //   console.log(this.formulario);
  // }
  
  /*** Para preview  del textarea */


}
