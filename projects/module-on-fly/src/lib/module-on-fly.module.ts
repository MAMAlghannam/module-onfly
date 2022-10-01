import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleOnFlyComponent } from './module-on-fly.component';



@NgModule({
  declarations: [ModuleOnFlyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ModuleOnFlyComponent  }
    ])
  ],
  // exports: [ModuleOnFlyComponent]
})
export class ModuleOnFlyModule { }
