import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'lib-moduleOnFly',
  template: `
    <p>
      module-on-fly works!
      <img src='onfly-assets/grady-booch-presenting-5.jpg' />
      <br />
      <br />
      <br />
      calculatedFromMoment: {{ calculatedFromMoment }}
    </p>
  `,
  styles: [
  ]
})
export class ModuleOnFlyComponent implements OnInit {

  calculatedFromMoment;

  constructor() { }

  ngOnInit(): void {

    this.calculatedFromMoment = moment.now()

  }

}
