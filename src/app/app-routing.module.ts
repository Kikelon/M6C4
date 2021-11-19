import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './pages/data/data.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { VistaComponent } from './pages/vista/vista.component';

const routes: Routes = [
  {path : "", redirectTo: "/vista", pathMatch:"full"},
  {path: "vista", component: VistaComponent},
  {path: "formulario", component: FormularioComponent},
  {path: "data", component: DataComponent},
  {path: '**', redirectTo: "/vista", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
