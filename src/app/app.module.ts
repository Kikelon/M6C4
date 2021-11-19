import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { VistaComponent } from './pages/vista/vista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CiudadesService } from './shared/ciudades.service';
import { MenuComponent } from './pages/menu/menu.component';

//Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DataComponent } from './pages/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    VistaComponent,
    MenuComponent,
    DataComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule    
  ],
  providers: [CiudadesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
