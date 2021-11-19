import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadesService } from 'src/app/shared/ciudades.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  public mostrar : Boolean;
  public ciudad : Ciudad;
  public codigoBuscado : string;

  constructor(public ciudadeService : CiudadesService, private _snackBar: MatSnackBar) {
    this.mostrar = false;
    this.ciudad = new Ciudad("", "", "");
    this.codigoBuscado = "";
  }

  public buscarPorCodigo(codigoCiudad : string){
    if (codigoCiudad.length == 3){
      let citie = this.ciudadeService.getOne(codigoCiudad);
      if (citie !== null){
        this.ciudad = new Ciudad(citie.nombre, citie.pais, citie.codigo);
        this.mostrar = true;
       } else {
        // this.codigoBuscado = codigoCiudad;
        this.error (codigoCiudad);
        this.mostrar = false; 
      }
    } else {
      this.error (codigoCiudad);
    }
  }

  private error(message: string) {
    if (message.length == 3){
      message = "No hay ciudades código " + message.toUpperCase();
      this._snackBar.open(message, 'Cerrar');  
    } else {
      message = "El código tiene que ser de tres letras mayúsculas";
      this._snackBar.open(message, 'Cerrar');
    }
  }

  ngOnInit(): void {
  }

}

