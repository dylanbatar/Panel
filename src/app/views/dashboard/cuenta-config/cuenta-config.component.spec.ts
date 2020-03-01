import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaConfigComponent } from './cuenta-config.component';

describe('CuentaConfigComponent', () => {
  let component: CuentaConfigComponent;
  let fixture: ComponentFixture<CuentaConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
