import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleOnFlyModule } from 'moduleOnFly'

const routes: Routes = [
  {
    path: 'flying',
    loadChildren: () => ModuleOnFlyModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
