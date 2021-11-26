import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'adn-posting',
  templateUrl: './adn-posting.component.html',
  styleUrls: ['./adn-posting.component.css']
})
export class AdnPostingComponent implements OnInit {

  @Input() txtareaAdn: string ='';
  // @Input() formulario: boolean = false;
  public adnDivided: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    console.log('lo que recibo: ' +this.txtareaAdn);
    this.txtareaString()
  }

  txtareaString(){
    let xd = this.txtareaAdn;
    // xd = this.txtareaAdn.toString();
    console.log(typeof(xd));
    this.adnDivided = Array.from(xd);
    console.log('este es adndividido: '+this.adnDivided);
  }

}
