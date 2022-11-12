import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherComponent } from './another/another.component';
import { Page1Component } from './page1/page1.component';

const basePath = 'mfa';

const routes: Routes = [
  {
    path: `${basePath}`,
    children: [
      {
        path: 'page1',
        component: Page1Component,
      },
      {
        path: `another`,
        component: AnotherComponent
      },
      {
        path: '**',
        redirectTo: 'page1'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
