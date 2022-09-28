import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOnFlyComponent } from './module-on-fly.component';

describe('ModuleOnFlyComponent', () => {
  let component: ModuleOnFlyComponent;
  let fixture: ComponentFixture<ModuleOnFlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOnFlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleOnFlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
