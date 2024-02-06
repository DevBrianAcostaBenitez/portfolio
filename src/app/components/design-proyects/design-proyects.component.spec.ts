import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignProyectsComponent } from './design-proyects.component';

describe('DesignProyectsComponent', () => {
  let component: DesignProyectsComponent;
  let fixture: ComponentFixture<DesignProyectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignProyectsComponent]
    });
    fixture = TestBed.createComponent(DesignProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
