/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameCompComponent } from './game-comp.component';

describe('GameCompComponent', () => {
  let component: GameCompComponent;
  let fixture: ComponentFixture<GameCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
