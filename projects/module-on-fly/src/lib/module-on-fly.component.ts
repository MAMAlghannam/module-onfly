import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-moduleOnFly',
  template: `
    <p>
      module-on-fly works!
    </p>
  `,
  styles: [
  ]
})
export class ModuleOnFlyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
