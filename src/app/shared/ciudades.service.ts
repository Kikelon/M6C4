import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  private ciudades : Ciudad[];

  constructor() {
    this.ciudades = [
      new Ciudad ("Madrid", "España", "MAD"),
      new Ciudad ("Roma", "Italia", "ROM"),
      new Ciudad ("Auckland", "Nueva Zelanda", "AUK"),
      new Ciudad ("Amsterdam", "Holanda", "AMS"),
      new Ciudad ("Nueva York", "Estados Unidos", "NYC"),
      new Ciudad ("Port Au Prince", "Haiti", "PAP"),
      new Ciudad ("Quito", "Ecuador", "UIO"),
      new Ciudad ("Santander", "España", "SDR"),
      new Ciudad ("Sofía", "Bulgaria", "SOF"),
      new Ciudad ("Dubai", "Emiratos Árabes", "DXB"),
    ]
   }

  public getAll(): Ciudad[]{
    return this.ciudades;
  }

  public getOne(code : String): Ciudad | null{
    const index = this.ciudades.findIndex(function(item, i){
      return item.codigo === code.toUpperCase();
    });  
    if (index!==-1) {return this.ciudades[index]} else {return null}; 
  }

  public add(ciudad: Ciudad): boolean{
    const oldLength = this.ciudades.length;
    const newLength = this.ciudades.push(ciudad);
    return (oldLength !== newLength);
  }

  public edit(ciudad: Ciudad): boolean{
    const index = this.ciudades.findIndex(function(item, i){
      return item.codigo === ciudad.codigo;
    });
    if (index !== -1){
      this.ciudades[index].nombre = ciudad.nombre;
      this.ciudades[index].pais = ciudad.pais;
    }
    return (index !== -1);  
  }

  public delete(code : String): boolean{
    const index = this.ciudades.findIndex(function(item, i){
      return item.codigo === code.toUpperCase();
    });
    (index > -1) ? (this.ciudades.splice(index, 1), console.log(this.ciudades)) : "";
    return (index !== -1);  
  } 

}
