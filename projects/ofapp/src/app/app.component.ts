import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'onfly-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {

  @Input() route?: string;

  title = 'OFApp';

  constructor(
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
      if(changes.route && this.router) {
        this.router.navigateByUrl(this.route, { state: { fromPlatform: true } })
      }
  }

}
