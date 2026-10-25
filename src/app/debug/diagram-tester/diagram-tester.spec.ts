import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiagramTester } from './diagram-tester';

describe('DiagramTester', () => {
  let component: DiagramTester;
  let fixture: ComponentFixture<DiagramTester>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramTester],
    }).compileComponents();

    fixture = TestBed.createComponent(DiagramTester);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
