import { Component } from '@angular/core';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class ModuleOnFlyComponent {
    constructor() { }
    ngOnInit() {
        this.calculatedFromMoment = moment.now();
    }
}
ModuleOnFlyComponent.ɵfac = function ModuleOnFlyComponent_Factory(t) { return new (t || ModuleOnFlyComponent)(); };
ModuleOnFlyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModuleOnFlyComponent, selectors: [["lib-moduleOnFly"]], decls: 7, vars: 1, consts: [["src", "onfly-assets/grady-booch-presenting-5.jpg"]], template: function ModuleOnFlyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " module-on-fly works! ");
        i0.ɵɵelement(2, "img", 0);
        i0.ɵɵelement(3, "br");
        i0.ɵɵelement(4, "br");
        i0.ɵɵelement(5, "br");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" calculatedFromMoment: ", ctx.calculatedFromMoment, " ");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleOnFlyComponent, [{
        type: Component,
        args: [{
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
                styles: []
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLW9uLWZseS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tb2R1bGUtb24tZmx5L3NyYy9saWIvbW9kdWxlLW9uLWZseS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7QUFpQmpDLE1BQU0sT0FBTyxvQkFBb0I7SUFJL0IsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtRQUVOLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUE7SUFFMUMsQ0FBQzs7d0ZBVlUsb0JBQW9CO3lEQUFwQixvQkFBb0I7UUFaN0IseUJBQUc7UUFDRCxzQ0FDQTtRQUFBLHlCQUF1RDtRQUN2RCxxQkFBTTtRQUNOLHFCQUFNO1FBQ04scUJBQU07UUFDTixZQUNGO1FBQUEsaUJBQUk7O1FBREYsZUFDRjtRQURFLCtFQUNGOzt1RkFLUyxvQkFBb0I7Y0FmaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7Z0JBQ0QsTUFBTSxFQUFFLEVBQ1A7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW1vZHVsZU9uRmx5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG1vZHVsZS1vbi1mbHkgd29ya3MhXG4gICAgICA8aW1nIHNyYz0nb25mbHktYXNzZXRzL2dyYWR5LWJvb2NoLXByZXNlbnRpbmctNS5qcGcnIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICBjYWxjdWxhdGVkRnJvbU1vbWVudDoge3sgY2FsY3VsYXRlZEZyb21Nb21lbnQgfX1cbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1vZHVsZU9uRmx5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjYWxjdWxhdGVkRnJvbU1vbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5jYWxjdWxhdGVkRnJvbU1vbWVudCA9IG1vbWVudC5ub3coKVxuXG4gIH1cblxufVxuIl19