import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { DataDbService } from 'src/app/services/data-db.service';

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
  public cadenasGet: any;//respuesta con datos de la API
  public cadenasGetAdn: Array<string>;//cadena de ADN de la API

  /***POST */
  public cadenasPost: Cadena;//obj cadena para envío

  /***vista previa de ADN */
  public textAreaGetAdn: Array<string>;//cadena de ADN del textarea en forma de array
  public textAreaContainer: string;//elementos de la cadena en forma de string
  public binding: string;//Captura del elemento tecleado

  constructor(
    private _DataDbService: DataDbService
  ){
    this.adnForm = new FormGroup({
      adnString: new FormControl()
    });
    this.cadenasPost = new Cadena([])
    this.cadenasGetAdn = new Array();
    this.textAreaGetAdn = [];
    this.textAreaContainer = "";
    this.binding = "";
  }

  ngOnInit() {
    this.mostarAdnsApi();
  }

  /*** utilidades ***/
  limpiarFormulario(){
    this.adnForm.reset();
  }

  //Obtener resultados de GET
  mostarAdnsApi(){
    this._DataDbService.getAdnApi().subscribe(
      result =>{
        this.cadenasGet = result;
        this.cadenasGetAdn = [];
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

  //VALIDACIONES textarea
  val_Comas(event: any){
    let tieneComa = event.indexOf(',');
      if (tieneComa != -1) {
        let indiceComa = this.textAreaContainer.lastIndexOf(',');
        this.textAreaContainer =  this.textAreaContainer.slice(0, indiceComa + 1);
        this.textAreaGetAdn = this.textAreaContainer.split(',');
        this.limpiarFormulario();
        return true
      }else return false;
  }

  val_tamañoMatriz(arrayAdn: Array<string>, textContainer: string){
    if (arrayAdn.length > 6) {
      arrayAdn.pop();
      textContainer = textContainer.slice(0, -2);
      this.limpiarFormulario();
      alert('la matriz de 6x6 ya se completo');
    }
  }

  //FUNCIONALIDAD textarea
  textareaForm2(event: any){
    //validacion de formulario vacio (necesario para cuando limpiamos el formulario)
    if(event != null){
      //validacion de "0 comas" para evitar errores en textAreaGetAdn
      if(this.val_Comas(event)){
        alert('Ingrese solamente valores de bases nitrogenadas validas (A, T, C, G)')
      }else{
        let itemAdn = event;
        switch(this.binding){
          case 'letra':
            //agregamos ultima letra al container y actualizamos el array
            this.textAreaContainer += itemAdn.substr(-1);
            this.textAreaGetAdn = this.textAreaContainer.split(',');

            //validacion de tamaño de matriz
            this.val_tamañoMatriz(this.textAreaGetAdn, this.textAreaContainer);

            //generamos la fila de la matriz (recordemos que cada fila es un item del array textAreaGetAdn)
            if(itemAdn.length == 6){
              itemAdn += ",";
              //console.log(itemAdn);
              this.textAreaContainer += itemAdn.substr(-1);
              //console.log(this.textAreaContainer)
              // // console.log("el largo del item es" +itemAdn.length);
              // // console.log(itemAdn)
              this.textAreaGetAdn = this.textAreaContainer.split(',');
              this.textAreaGetAdn.pop();
              console.log(this.textAreaGetAdn);
              this.limpiarFormulario();
            }
            break;
          case 'borrar':
            //Borramos el ultimo elemento
            this.textAreaContainer = this.textAreaContainer.substring(0, this.textAreaContainer.length - 1);
            this.textAreaGetAdn = this.textAreaContainer.split(',');
            break;
        }
      }
    }else{
      //console.log('no se hizo la machaca')
    }
  }


  capturaTecla(event: KeyboardEvent){
    let i =  event.key;
    let response = ""
    switch (i) {
      case 'a': case 'A':
      case 't': case 'T':
      case 'c': case 'C':
      case 'g': case 'G':
      case ',': 
        response = 'letra'
        //console.log('se apreto ATCG')
        break;
    case 'Backspace':
      response = 'borrar'
      break;
    default:
      event.preventDefault();
      response = 'nada'
      break;
    }
    this.binding = response;
    //console.log(this.binding);
    //console.log('variable ltimaLetra: '+this.ultimaLetra);
    // if(event.key == 'Backspace'){
    //   console.log('presionaste borrar');
    //   return true;
    // }
    // else{
    //   return false;
    // } 
  }

  //submit
  onSubmitManual(){
    this.cadenasPost= new Cadena(this.textAreaGetAdn);
    // let xd: any = '';
    // xd =this.adnForm.value;
    // //console.log(JSON.stringify(this.cadenasPost));
    // this.cadenasPost= new Cadena(xd.adnString.split(','))
    //hacemos el post en la linea siguiente
    this._DataDbService.addAdnApi(this.cadenasPost).subscribe(data =>{
      //console.log('se realizo el post parece ' + this.cadenasPost);
      alert('Se ha enviado la cadena de ADN a revision');
      this.textAreaGetAdn = [];
      this.limpiarFormulario();
      this.mostarAdnsApi();
    })
  }

  onSubmitPasted(){
    let xd =this.adnForm.value;
    this.cadenasPost= new Cadena(xd.adnString.split(','))
    // let xd: any = '';
    // xd =this.adnForm.value;
    // //console.log(JSON.stringify(this.cadenasPost));
    // this.cadenasPost= new Cadena(xd.adnString.split(','))
    //hacemos el post en la linea siguiente
    this._DataDbService.addAdnApi(this.cadenasPost).subscribe(data =>{
      //console.log('se realizo el post parece ' + this.cadenasPost);
      alert('Se ha enviado la cadena de ADN a revision');
      this.mostarAdnsApi();
    })
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
