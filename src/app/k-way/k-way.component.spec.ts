/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KWayComponent } from './k-way.component';

describe('KWayComponent', () => {
  let component: KWayComponent;
  let fixture: ComponentFixture<KWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
