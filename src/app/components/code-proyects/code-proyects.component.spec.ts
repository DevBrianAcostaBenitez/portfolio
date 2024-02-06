import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeProyectsComponent } from './code-proyects.component';

describe('CodeProyectsComponent', () => {
  let component: CodeProyectsComponent;
  let fixture: ComponentFixture<CodeProyectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeProyectsComponent]
    });
    fixture = TestBed.createComponent(CodeProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
