import { Component, OnInit, Provider } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { DataDbService } from 'src/app/services/data-db.service';
import { EventEmitter } from '@angular/core';

import{ Cadena } from '../../models/cadena';

@Component({
  selector: 'formulario-adn',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers:[DataDbService]
})

export class ItemsComponent implements OnInit {
  /***Formlario */
  public adnForm: FormGroup;//formulario
  /***GET */
  public cadenasGet: any;//respuesta de la API
  public cadenasGetAdn: Array<string>;//cadena de ADN de la API
  /***POST */
  public cadenasPost: Cadena;//obj cadena 
  /***vista previa de ADN */
  public textAreaGetAdn: Array<string>;//cadena de ADN del textarea
  public enviar: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  constructor(
    private formBuilder: FormBuilder,
    private _DataDbService: DataDbService
  ){
    
    // this.cadenas = [//prueba local
    //   new Cadena(["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"])
    // ]

    this.adnForm = new FormGroup({
      adnString: new FormControl('')
    });
    this.cadenasPost = new Cadena([])
    this.cadenasGetAdn = new Array();
    this.textAreaGetAdn = [];
   
  }

  ngOnInit() {
    this.mostarAdnsApi();
    console.log(this.textAreaGetAdn);
  }

  /*** utilidades ***/
  onResetForm(){
    this.adnForm.reset();
  }

  //Obtener resultados de GET
  mostarAdnsApi(){
    this._DataDbService.getAdnApi().subscribe(
      result =>{
        this.cadenasGet = result;
        this.cadenasGetAdn = [];
        //console.log(this.cadenasGet);
        //console.log(this.cadenasGetAdn);
        for(let i in this.cadenasGet){
          let xd = this.cadenasGet[i].adn;
          this.cadenasGetAdn.push(xd);
        }
        console.log( typeof(this.cadenasGetAdn))
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  //funcionalidades textarea
  textAreaAdn(event: KeyboardEvent){
    let xd = this.adnForm.value
    //console.log(xd)
    this.textAreaGetAdn = xd.adnString.split(',');
    console.log(this.textAreaGetAdn);
    // this.enviar.emit(this.textAreaGetAdn);
    // for(let i in xd){
    //   let xd2 = xd[i].adn;
    //   this.textAreaGetAdn = xd
    // }
  }

  getTextArea(){
    let xd;
    xd =this.adnForm.value;
    return xd;
    // this.cadenasPost= new Cadena(xd.adnString.split(','))
    // console.log(this.cadenasPost);
  }

  //submit
  onSubmit(){
    let xd;
    xd =this.adnForm.value;
    this.cadenasPost= new Cadena(xd.adnString.split(','))
    // let xd: any = '';
    // xd =this.adnForm.value;
    // //console.log(JSON.stringify(this.cadenasPost));
    // this.cadenasPost= new Cadena(xd.adnString.split(','))
    //hacemos el post en la linea siguiente
    this._DataDbService.addAdnApi(this.cadenasPost).subscribe(data =>{
      //console.log('se realizo el post parece ' + this.cadenasPost);
      alert('Se ha enviado la cadena de ADN a revision');
      this.onResetForm()
    })
    //console.log(JSON.stringify(this.cadenasPost))


    // let array = []
    // array = xd.adnString2.split(',')
    // console.log(array);

    // console.log('la informacion ingresada no es valida,')
    // let xd = this.adnForm.value;
    // console.log(xd.adnString2)
  }
  /*
    ATGCGA,CAGTGC,TTATTT,AGACGG,GCGTCA,TCACTG - sin secuencias
    ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG - con mas de 2 secuencias
    ATGCGA,CAGTGC,TTTTTT,AGACGG,GCGTCA,TCACTG - con 1 secuencia
    const adn = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]; // con mas de 2 mutaciones
    const adnClean = ["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACTG"]; //sin mutaciones
    const adnSemiClean = ["ATGCGA","CAGTGC","TTTTTT","AGACGG","GCGTCA","TCACTG"]; //con 1 mutacion
  */
}
