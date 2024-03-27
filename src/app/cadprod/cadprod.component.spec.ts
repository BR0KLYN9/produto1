import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadprodComponent } from './cadprod.component';

describe('CadprodComponent', () => {
  let component: CadprodComponent;
  let fixture: ComponentFixture<CadprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadprodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
