import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as moment from 'moment';

class ModuleOnFlyComponent {
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

class ModuleOnFlyModule {
}
ModuleOnFlyModule.ɵmod = i0.ɵɵdefineNgModule({ type: ModuleOnFlyModule });
ModuleOnFlyModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ModuleOnFlyModule_Factory(t) { return new (t || ModuleOnFlyModule)(); }, imports: [[
            CommonModule,
            RouterModule.forChild([
                { path: '', component: ModuleOnFlyComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ModuleOnFlyModule, { declarations: [ModuleOnFlyComponent], imports: [CommonModule, i1.RouterModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleOnFlyModule, [{
        type: NgModule,
        args: [{
                declarations: [ModuleOnFlyComponent],
                imports: [
                    CommonModule,
                    RouterModule.forChild([
                        { path: '', component: ModuleOnFlyComponent }
                    ])
                ],
            }]
    }], null, null); })();

/*
 * Public API Surface of module-on-fly
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ModuleOnFlyModule };
//# sourceMappingURL=module-on-fly.js.map
