import { Component, OnInit, Input } from '@angular/core';

//import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'adn-results',
  templateUrl: './adn-results.component.html',
  styleUrls: ['./adn-results.component.css']
})
export class AdnResultsComponent implements OnInit {
  
  @Input() arrayAdn: Array<string> = [];
  // @Input() formulario: boolean = false;
  public adnDivided: Array<string> = [];
  constructor() {
   
  }

  ngOnInit(): void {
    //console.log('._.XD' + this.arrayAdn)
    this.fromString();
    // this.getForm()
  }

  fromString(){
    this.adnDivided = Array.from(this.arrayAdn);
    //console.log(this.adnDivided);
  }

  // getForm(){
  //   console.log(this.formulario);
  // }
  

}
