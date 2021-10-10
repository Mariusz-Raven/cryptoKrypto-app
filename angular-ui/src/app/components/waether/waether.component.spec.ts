import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaetherComponent } from './waether.component';

describe('WaetherComponent', () => {
  let component: WaetherComponent;
  let fixture: ComponentFixture<WaetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaetherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
