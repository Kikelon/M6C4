import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadesService } from 'src/app/shared/ciudades.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(public ciudadeService : CiudadesService, private _snackBar: MatSnackBar) { }

  public addCity (nombre : string, pais : string, codigo : string){
    let added: boolean = false;
    if ( nombre!== "" && pais !== "" && codigo.length == 3){
    let city = new Ciudad(nombre, pais, codigo.toUpperCase());
    added = this.ciudadeService.add(city);
  }    
  this.informo(added, "añadir");
  }
  public delCity (codigo : string){
    let deleted: boolean = false;
    if (codigo.length == 3){
    deleted = this.ciudadeService.delete(codigo.toUpperCase());
    }
    this.informo(deleted, "borrar");
  }
  public modCity (nombre : string, pais : string, codigo : string){
    let modified: boolean = false;
    if ( nombre!== "" && pais !== "" && codigo.length == 3){
    let city = new Ciudad(nombre, pais, codigo.toUpperCase());
    modified = this.ciudadeService.edit(city);
    }
    this.informo(modified, "modificar", );        
  }

  private informo(message: boolean, operacion : string) {
    if (message){
      this._snackBar.open('Operación ' + operacion + ' realizada con éxito', 'Cerrar');  
    } else {
      this._snackBar.open('No se pudo realizar la operación de ' + operacion, 'Cerrar');
    }    
  }

  ngOnInit(): void {
  }

}
