import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadesService } from 'src/app/shared/ciudades.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  public ciudades : Ciudad[];

  constructor(public ciudadeService : CiudadesService) { 
    this.ciudades = this.ciudadeService.getAll();
  }
 
  ngOnInit(): void {
  }

}
