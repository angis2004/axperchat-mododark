import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEjemploComponent } from './chart-ejemplo.component';

describe('ChartEjemploComponent', () => {
  let component: ChartEjemploComponent;
  let fixture: ComponentFixture<ChartEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartEjemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
