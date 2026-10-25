import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArenaDiagram } from './arena-diagram';

describe('ArenaDiagram', () => {
  let component: ArenaDiagram;
  let fixture: ComponentFixture<ArenaDiagram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArenaDiagram],
    }).compileComponents();

    fixture = TestBed.createComponent(ArenaDiagram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
