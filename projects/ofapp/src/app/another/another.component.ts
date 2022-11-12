import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss']
})
export class AnotherComponent implements OnInit {

  now = moment.now();

  constructor() { }

  ngOnInit(): void {
  }

}
